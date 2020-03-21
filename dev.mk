.PHONY: help install clean

install:
	make -f dev.mk -C node $@
	make -f dev.mk -C playground $@

clean:
	make -f dev.mk -C node $@
	make -f dev.mk -C playground $@