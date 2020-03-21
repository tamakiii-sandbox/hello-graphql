#!/usr/bin/env bash

if [ "$1" == "" ]; then
  make -f dev.mk install server
else
  exec "$@"
fi