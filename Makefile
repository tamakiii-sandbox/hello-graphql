.PHONY: install

install: \
	node_modules

node_modules:
	npm install

clean:
	rm -rf node_modules