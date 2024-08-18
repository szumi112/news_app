IMAGE_NAME = vite-app:dev
CONTAINER_NAME = news-app

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -p 3000:3000 --name $(CONTAINER_NAME) -v $(shell pwd):/app $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

clean:
	docker rmi $(IMAGE_NAME)
