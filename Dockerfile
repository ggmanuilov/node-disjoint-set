FROM node:12

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# set GUI from localhost
ARG UID=1000
ARG GID=1000
ENV UID=${UID}
ENV GID=${GID}

RUN usermod -u ${UID} node   && \
    groupmod -g ${GID} node  && \
    mkdir -p /usr/src        && \
    chown -R ${UID}:${GID} /home/node /usr/src

COPY ./ /usr/src

WORKDIR /usr/src

# work as root is not true
USER node

RUN /bin/bash /usr/src/docker/server/last_protoc.sh && npm i

## Start
CMD [ "npm", "run", "server" ]
