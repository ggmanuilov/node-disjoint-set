// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dsu_service_pb = require('./dsu_service_pb.js');

function serialize_EmptyResponse(arg) {
  if (!(arg instanceof dsu_service_pb.EmptyResponse)) {
    throw new Error('Expected argument of type EmptyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EmptyResponse(buffer_arg) {
  return dsu_service_pb.EmptyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TransferBeginRequest(arg) {
  if (!(arg instanceof dsu_service_pb.TransferBeginRequest)) {
    throw new Error('Expected argument of type TransferBeginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TransferBeginRequest(buffer_arg) {
  return dsu_service_pb.TransferBeginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TransferEndRequest(arg) {
  if (!(arg instanceof dsu_service_pb.TransferEndRequest)) {
    throw new Error('Expected argument of type TransferEndRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TransferEndRequest(buffer_arg) {
  return dsu_service_pb.TransferEndRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UniteRequest(arg) {
  if (!(arg instanceof dsu_service_pb.UniteRequest)) {
    throw new Error('Expected argument of type UniteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UniteRequest(buffer_arg) {
  return dsu_service_pb.UniteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DsuServiceService = exports.DsuServiceService = {
  transferBegin: {
    path: '/DsuService/TransferBegin',
    requestStream: false,
    responseStream: false,
    requestType: dsu_service_pb.TransferBeginRequest,
    responseType: dsu_service_pb.EmptyResponse,
    requestSerialize: serialize_TransferBeginRequest,
    requestDeserialize: deserialize_TransferBeginRequest,
    responseSerialize: serialize_EmptyResponse,
    responseDeserialize: deserialize_EmptyResponse,
  },
  unite: {
    path: '/DsuService/Unite',
    requestStream: false,
    responseStream: false,
    requestType: dsu_service_pb.UniteRequest,
    responseType: dsu_service_pb.EmptyResponse,
    requestSerialize: serialize_UniteRequest,
    requestDeserialize: deserialize_UniteRequest,
    responseSerialize: serialize_EmptyResponse,
    responseDeserialize: deserialize_EmptyResponse,
  },
  transferEnd: {
    path: '/DsuService/TransferEnd',
    requestStream: false,
    responseStream: false,
    requestType: dsu_service_pb.TransferEndRequest,
    responseType: dsu_service_pb.EmptyResponse,
    requestSerialize: serialize_TransferEndRequest,
    requestDeserialize: deserialize_TransferEndRequest,
    responseSerialize: serialize_EmptyResponse,
    responseDeserialize: deserialize_EmptyResponse,
  },
};

exports.DsuServiceClient = grpc.makeGenericClientConstructor(DsuServiceService);
