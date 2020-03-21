FROM node:13.10.1 AS production-pseudo

WORKDIR /app/node

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "docker-entrypoint.sh" ]

# --

FROM production-pseudo AS development

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      make \
      git \
      vim \
      less \
      && \
    apt-get clean

COPY docker-entrypoint.dev.sh /usr/local/bin/docker-entrypoint.dev.sh
ENTRYPOINT [ "docker-entrypoint.dev.sh" ]