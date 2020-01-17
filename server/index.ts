const grpc = require("grpc");
import path = require("path");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("protos/dsu_service.proto");
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

import { EmptyResponse } from "../generated/dsu_service_pb";
import DsuServiceRank from "./services/DsuServiceRank";
import DsuChecker from "./utils/DsuChecker";

const DsuService = new DsuServiceRank();
const DsuServiceChecker = new DsuChecker();
const RpcServer = new grpc.Server();

const clientPool: Map<number, number> = new Map<number, number>();

const checkFile = path.resolve(__dirname, "./../data/union_check.txt");

RpcServer.addService(serviceProto.DsuService.service, {
  transferBegin: (call: any, callback: any) => {
    const request = call.request;
    clientPool.set(request.appId, request.appId);

    console.log(request.appId, " transfer begin");

    callback(null, new EmptyResponse());
  },

  transferEnd: async (call: any, callback: any) => {
    const request = call.request;
    clientPool.delete(request.appId);
    console.log(request.appId, " transfer end");

    if (clientPool.size === 0) {
      console.log("Run check results");
      const difference = await DsuServiceChecker.check(DsuService, checkFile);

      if (difference) {
        difference.items.forEach((item: string) => {
          console.log(item);
        });
      }
      console.log("Check is done.");
    }

    callback(null, new EmptyResponse());
  },

  unite: (call: any, callback: any) => {
    const request = call.request;
    DsuService.unite(request.x, request.y);

    callback(null, new EmptyResponse());
  }
});

console.log("Start generate sequence 1 000 000");
for (let i = 1; i <= 1000000; i++) {
  DsuService.make(i);
}
console.log("End generate sequence");

RpcServer.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
console.log("Server running at 0.0.0.0:50051");
RpcServer.start();
