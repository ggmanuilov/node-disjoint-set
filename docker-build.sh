#!/bin/bash
docker-compose -f docker-compose.yml \
build                    \
--build-arg UID=$(id -u) \
--build-arg GID=$(id -g)