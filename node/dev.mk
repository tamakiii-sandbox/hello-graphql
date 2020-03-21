.PHONY: help install server clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install

server: install
	npx --no-install nodemon \
		--watch 'src/**/*' \
		--ext 'js,graphql' \
		--exec "make server || exit 1"

clean:
	rm -rf node_modules