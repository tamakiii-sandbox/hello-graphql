#!/usr/bin/env bash

if [ "$1" == "" ]; then
  make -f dev.mk playground
else
  exec "$@"
fi