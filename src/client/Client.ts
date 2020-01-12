import {
  TransferBeginRequest,
  TransferEndRequest,
  UniteRequest
} from "../generated/dsu_service_pb";
import { DsuServiceClient } from "../generated/dsu_service_grpc_pb";
import * as grpc from "grpc";
import { connectivityState } from "grpc";

class Client {
  private client: DsuServiceClient;

  constructor(host: string) {
    this.client = new DsuServiceClient(host, grpc.credentials.createInsecure());

    let state = this.client.getChannel().getConnectivityState(true);
    if (state > connectivityState.READY) {
      console.error(`Connection to gRPC server "${host}" is failed.`);
      process.exit(2);
    }
  }

  transferBegin = (appId: number): void => {
    const transferBeginRequest = new TransferBeginRequest();
    transferBeginRequest.setAppId(appId);
    this.client.transferBegin(transferBeginRequest, err => {
      if (err) throw err;
    });
  };

  transferEnd = async (appId: number): Promise<void> => {
    return new Promise<void>(resolve => {
      const transferEndRequest = new TransferEndRequest();
      transferEndRequest.setAppId(appId);
      this.client.transferEnd(transferEndRequest, err => {
        if (err) console.error("transfer begin:", err);
        return resolve();
      });
    });
  };

  destroy() {
    this.client.close();
    delete this.client;
  }

  unite = async (clientId: number, x: number, y: number) => {
    return new Promise<boolean>((resolve, reject) => {
      let uniteRequest = new UniteRequest();
      uniteRequest.setClientId(clientId);
      uniteRequest.setX(x);
      uniteRequest.setY(y);

      this.client.unite(uniteRequest, err => {
        if (err) reject(`error: "${err}"`);
        return resolve();
      });
    });
  };
}

export default Client;
