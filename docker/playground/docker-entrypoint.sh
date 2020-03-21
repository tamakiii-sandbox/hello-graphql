#!/usr/bin/env bash

if [ "$1" == "" ]; then
  make playground
else
  exec "$@"
fi