.PHONY: help install clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install

playground:
	npx --no-install nodemon -w src --exec "make playground || exit 1"

clean:
	rm -rf node_modules