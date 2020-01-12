FROM node:12

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ARG UID=1000
ARG GID=1000
ENV UID=${UID}
ENV GID=${GID}

RUN usermod -u ${UID} node
RUN groupmod -g ${GID} node
RUN chown -R ${UID}:${GID} /home/node

RUN mkdir -p /usr/src
RUN chown -R ${UID}:${GID} /usr/src

WORKDIR /usr/src

USER node

# install protoc in system
COPY docker/server/last_protoc.sh /usr/src
RUN /bin/bash /usr/src/last_protoc.sh

COPY src/package.json /usr/src
COPY src/package-lock.json /usr/src


RUN npm install

## Start
CMD [ "npm", "run", "server" ]
