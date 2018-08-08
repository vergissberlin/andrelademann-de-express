-include: .env

PORT ?= 3030
PROTOCOL ?= http

IB="\033[1;92m "
IE="\033[0m\n"

up:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up -d --remove-orphans
	@echo "\033[1;92m The application will be available soon at $(PROTOCOL)://0.0.0.0:$(PORT) in developer mode.\033[0m\n"

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d
	@echo "\033[1;92m The application will be available soon at $(PROTOCOL)://andrelademann.local in production mode.\033[0m\n"

up-proxy:
	docker-compose -f docker-compose.proxy.yml up -d --remove-orphans
	@echo "\033[1;92m The proxy is up and runing.\033[0m\n"

down:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml -f docker-compose.production.yml -f docker-compose.proxy.yml down -v
	@echo "\033[1;92m Shut down all applications.\033[0m\n"
	docker-compose ps

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
	@echo "\033[1;91m All docker images and volumes removed ...\033[0m\n"
