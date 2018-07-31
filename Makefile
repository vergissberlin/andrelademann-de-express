-include: .env

PORT ?= 3030

up:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up -d --remove-orphans
	@echo "Open the application at https://0.0.0.0:$(PORT) in developer mode"

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d
	@echo "Open the application at https://andrelademann.local in production mode"

up-proxy:
	docker-compose -f docker-compose.proxy.yml up -d --remove-orphans
	@echo "The proxy is up and runing"

down:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml down -v

down-prod:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml down -v

down-proxy:
	docker-compose -f docker-compose.proxy.yml down -v
	@echo "The proxy is down"

build:
	docker-compose -f docker-compose.yml -f docker-compose.build.yml build

push:
	docker-compose -f docker-compose.yml -f docker-compose.build.yml push

pull:
	git pull
	git fetch
	docker-compose pull

log:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml -f docker-compose.production.yml -f docker-compose.proxy.yml logs -f

bash:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml exec app bash

tidy:
	yes | docker system prune -a
	yes | docker volume prune
	rm -Rf data/db
