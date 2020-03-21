.PHONY: help install clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install

playground:
	node src/playground.js

clean:
	rm -rf node_modules