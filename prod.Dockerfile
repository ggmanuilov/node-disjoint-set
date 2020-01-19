FROM node:12

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# set GUI from localhost
ARG UID=1000
ARG GID=1000
ENV UID=${UID}
ENV GID=${GID}

RUN usermod -u ${UID} node   && \
    groupmod -g ${GID} node  && \
    mkdir -p /usr/src && \
    apt update && \
    apt install net-tools && \
    apt clean

WORKDIR /usr/src

# copy all sourses
COPY . .

# change permissions to local user
RUN chown -R ${UID}:${GID} /home/node /usr/src

# work as root is not true
USER node

# instal protoc tool generation
#RUN /bin/bash /usr/src/docker/server/last_protoc.sh

#install dependency
RUN npm i --production

## Start
CMD [ "npm", "run", "server" ]
