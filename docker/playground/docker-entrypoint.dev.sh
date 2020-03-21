#!/usr/bin/env bash

if [ "$1" == "" ]; then
  make -f dev.mk install playground
else
  exec "$@"
fi