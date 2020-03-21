.PHONY: help install clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install --only=production

server: install
	node src/server.js

clean:
	rm -rf node_modules