.PHONY: help install build clean

ENVIRONMENT := production-pseudo

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	.env \
	build

.env:
	touch $@
	echo "ENVIRONMENT=$(ENVIRONMENT)" >> $@

build:
	docker-compose build

clean:
	docker-compose down -v