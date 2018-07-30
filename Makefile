-include: .env

PORT ?= 3030

up:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up -d
	@echo "Open the application at https://0.0.0.0:$(PORT)"

down:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml down -v

log:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml logs -f

bash:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml exec app bash

tidy:
	yes | docker system prune -a
	yes | docker volume prune
	rm -Rf data/db
