.PHONY: help install clean

install:
	make -C node $@
	make -C playground $@

clean:
	make -C node $@
	make -C playground $@