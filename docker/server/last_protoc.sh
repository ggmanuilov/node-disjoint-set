#!/bin/bash
CURRENT_DIR="$(pwd)"

VERSION=`curl --silent "https://api.github.com/repos/protocolbuffers/protobuf/releases/latest" | grep -Po '"tag_name": "v\K.*?(?=")'`

[[ -z VERSION ]] && echo "Could not get version from github"

# Go to home directory
cd ~
# Make sure you grab the latest version
curl -OL "https://github.com/google/protobuf/releases/download/v$VERSION/protoc-$VERSION-linux-x86_64.zip"

# Unzip
unzip "protoc-$VERSION-linux-x86_64.zip" -d protoc3
rm "protoc-$VERSION-linux-x86_64.zip"

echo "#alias commands" > ~/.bash_aliases
echo "alias protoc='~/protoc3/bin/protoc'" > ~/.bash_aliases

cd $CURRENT_DIR

#protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}" --plugin="protoc-gen-grpc-ts=${PROTOC_GEN_GRPC_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="${OUT_DIR}" --grpc_out="${OUT_DIR}" --grpc-ts_out="${OUT_DIR}" protos/dsu_service.proto

