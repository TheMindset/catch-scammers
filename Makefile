help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

include .env

CONTAINER_NAME?=csa

FIG?=docker-compose -f docker-compose.$(NODE_ENV).yml
#ifeq ($(INFRA_ENV), dev)
#    FIG   += -f docker-compose.dev.yml
#endif
#ifeq ($(INFRA_ENV), ci)
#    FIG   += -f docker-compose.ci.yml
#endif


dev: ## Build Dockerfile & start the project in dev mode on PORT define in your .env file
	$(FIG) up

start: ## Build Dockerfile & start the project on PORT define in your .env file
	$(FIG) up -d

bstart: ## Re-build the project based on Dockerfile & start the project based on PORT define in oyur .env file
	$(FIG) up -d --build

stop: ## Remove docker containers
	$(FIG) down --remove-orphans

reset: stop start ## Reset the whole project

flogs: ## See and follow project logs
	$(FIG) logs -f csa

.DEFAULT_GOAL: help
.PHONY: help start bstart stop reset logs flogs
