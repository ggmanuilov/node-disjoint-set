// package: 
// file: dsu_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as dsu_service_pb from "./dsu_service_pb";

interface IDsuServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transferBegin: IDsuServiceService_ITransferBegin;
    unite: IDsuServiceService_IUnite;
    transferEnd: IDsuServiceService_ITransferEnd;
}

interface IDsuServiceService_ITransferBegin extends grpc.MethodDefinition<dsu_service_pb.TransferBeginRequest, dsu_service_pb.EmptyResponse> {
    path: string; // "/.DsuService/TransferBegin"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<dsu_service_pb.TransferBeginRequest>;
    requestDeserialize: grpc.deserialize<dsu_service_pb.TransferBeginRequest>;
    responseSerialize: grpc.serialize<dsu_service_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<dsu_service_pb.EmptyResponse>;
}
interface IDsuServiceService_IUnite extends grpc.MethodDefinition<dsu_service_pb.UniteRequest, dsu_service_pb.EmptyResponse> {
    path: string; // "/.DsuService/Unite"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<dsu_service_pb.UniteRequest>;
    requestDeserialize: grpc.deserialize<dsu_service_pb.UniteRequest>;
    responseSerialize: grpc.serialize<dsu_service_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<dsu_service_pb.EmptyResponse>;
}
interface IDsuServiceService_ITransferEnd extends grpc.MethodDefinition<dsu_service_pb.TransferEndRequest, dsu_service_pb.EmptyResponse> {
    path: string; // "/.DsuService/TransferEnd"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<dsu_service_pb.TransferEndRequest>;
    requestDeserialize: grpc.deserialize<dsu_service_pb.TransferEndRequest>;
    responseSerialize: grpc.serialize<dsu_service_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<dsu_service_pb.EmptyResponse>;
}

export const DsuServiceService: IDsuServiceService;

export interface IDsuServiceServer {
    transferBegin: grpc.handleUnaryCall<dsu_service_pb.TransferBeginRequest, dsu_service_pb.EmptyResponse>;
    unite: grpc.handleUnaryCall<dsu_service_pb.UniteRequest, dsu_service_pb.EmptyResponse>;
    transferEnd: grpc.handleUnaryCall<dsu_service_pb.TransferEndRequest, dsu_service_pb.EmptyResponse>;
}

export interface IDsuServiceClient {
    transferBegin(request: dsu_service_pb.TransferBeginRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    transferBegin(request: dsu_service_pb.TransferBeginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    transferBegin(request: dsu_service_pb.TransferBeginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    unite(request: dsu_service_pb.UniteRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    unite(request: dsu_service_pb.UniteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    unite(request: dsu_service_pb.UniteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    transferEnd(request: dsu_service_pb.TransferEndRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    transferEnd(request: dsu_service_pb.TransferEndRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    transferEnd(request: dsu_service_pb.TransferEndRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
}

export class DsuServiceClient extends grpc.Client implements IDsuServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transferBegin(request: dsu_service_pb.TransferBeginRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public transferBegin(request: dsu_service_pb.TransferBeginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public transferBegin(request: dsu_service_pb.TransferBeginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public unite(request: dsu_service_pb.UniteRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public unite(request: dsu_service_pb.UniteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public unite(request: dsu_service_pb.UniteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public transferEnd(request: dsu_service_pb.TransferEndRequest, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public transferEnd(request: dsu_service_pb.TransferEndRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public transferEnd(request: dsu_service_pb.TransferEndRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dsu_service_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
}
