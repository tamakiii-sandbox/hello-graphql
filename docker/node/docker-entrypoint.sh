#!/usr/bin/env bash

if [ "$1" == "" ]; then
  make server
else
  exec "$@"
fi