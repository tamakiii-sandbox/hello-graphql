.PHONY: help install clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	node_modules

node_modules:
	npm install

playground: install
	npx --no-install nodemon \
		--watch 'src/**/*' \
		--ext 'js,graphql' \
		--exec "make playground || exit 1"

clean:
	rm -rf node_modules