.PHONY: help install server clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install --dev

server:
	npx --no-install nodemon -w src --exec "make server || exit 1"

clean:
	rm -rf node_modules