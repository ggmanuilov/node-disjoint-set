// package: 
// file: dsu_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TransferBeginRequest extends jspb.Message { 
    getAppId(): number;
    setAppId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferBeginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransferBeginRequest): TransferBeginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferBeginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferBeginRequest;
    static deserializeBinaryFromReader(message: TransferBeginRequest, reader: jspb.BinaryReader): TransferBeginRequest;
}

export namespace TransferBeginRequest {
    export type AsObject = {
        appId: number,
    }
}

export class TransferEndRequest extends jspb.Message { 
    getAppId(): number;
    setAppId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferEndRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransferEndRequest): TransferEndRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferEndRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferEndRequest;
    static deserializeBinaryFromReader(message: TransferEndRequest, reader: jspb.BinaryReader): TransferEndRequest;
}

export namespace TransferEndRequest {
    export type AsObject = {
        appId: number,
    }
}

export class EmptyResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyResponse;
    static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
    export type AsObject = {
    }
}

export class UniteRequest extends jspb.Message { 
    getClientId(): number;
    setClientId(value: number): void;

    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UniteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UniteRequest): UniteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UniteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UniteRequest;
    static deserializeBinaryFromReader(message: UniteRequest, reader: jspb.BinaryReader): UniteRequest;
}

export namespace UniteRequest {
    export type AsObject = {
        clientId: number,
        x: number,
        y: number,
    }
}
