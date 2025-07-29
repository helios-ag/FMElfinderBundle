.PHONY: *

help: ## Show help
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

tests: ## Run tests
	# rm -rf $(shell php -r "echo sys_get_temp_dir();")/com.github.helios-ag.fmelfinder/tests/var/test/cache/*
	php vendor/bin/simple-phpunit -v

tests-coverage: ## Generate test coverage
	rm -rf $(shell php -r "echo sys_get_temp_dir();")/com.github.helios-ag.fmelfinder/tests/var/test/cache/*
	XDEBUG_MODE=coverage php vendor/bin/simple-phpunit --coverage-html $(shell php -r "echo sys_get_temp_dir();")/com.github.helios-ag.fmelfinder/tests/var/test/coverage/

linter-code-syntax: ## Lint PHP code (in dry-run mode, does not edit files)
	docker run --rm -it --pull always -w=/app -v $(shell pwd):/app oskarstark/php-cs-fixer-ga:latest --diff -vvv --dry-run --using-cache=no

build: ## Initially build the package before development
	composer update

