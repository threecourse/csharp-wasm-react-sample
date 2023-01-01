MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help

# all targets are phony
.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

setup-cs-wasm: setup-cs-wasm-copy setup-cs-wasm-build
	@echo 'Starting $@'
	@echo 'Finished $@'

setup-cs-wasm-build:
	@echo 'Starting $@'
	cd cs-wasm && rm -rf ./build && dotnet build --configuration Release -o ./build
	@echo 'Finished $@'

setup-cs-wasm-copy: setup-cs-wasm-build
	@echo 'Starting $@'
	rm -rf ./react/src/wasm/build && cp -r ./cs-wasm/build/AppBundle/ ./react/src/wasm/build
	@echo 'Finished $@'

setup-react:
	@echo 'Starting $@'
	cd react && yarn
	@echo 'Finished $@'

run-react:
	@echo 'Starting $@'
	cd react && yarn dev
	@echo 'Finished $@'


help: ## Print this help
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
