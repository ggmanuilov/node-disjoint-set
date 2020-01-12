#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./generated

mkdir -p ${PROTO_DEST}

## JavaScript code generating
protoc --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts --ts_out=./generated --proto_path=./protos  ./protos/dsu_service.proto
protoc --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin --js_out=import_style=commonjs,binary:./generated --grpc_out=./generated  --proto_path=./protos  ./protos/dsu_service.proto
