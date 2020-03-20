FROM node:13.10.1 AS production-pseudo

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