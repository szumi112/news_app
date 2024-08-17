# News App

This is a Dockerized Vite-based React application that allows users to search for news by keywords and filter or personalize their news feed.

# Prerequisites

To run this project, you need to have the following installed:

- Docker
- (Optional) make (if you want to use the provided Makefile for easier command execution)

# Getting Started

Follow these steps to build and run the project using Docker.

## 1. Clone the Repository

First, clone the repository to your local machine:

`git clone https://github.com/szumi112/news_app`

`cd news_app`

## 2. Build the Docker Image

To build the Docker image, run the following command:

`docker build -t vite-app:dev .`

This command creates a Docker image named vite-app:dev based on the instructions in the Dockerfile.

## 3. Run the Docker Container

To start the application, run the following command:

`docker run -p 3000:3000 --name news-app vite-app:dev`

This command starts a Docker container named news-app and maps port 3000 of the container to port 3000 on your local machine. The application will be accessible at http://localhost:3000.

## Using the Makefile (Optional)

If you have make installed, you can use the Makefile provided in this repository to simplify the Docker commands.

### Build the Docker Image:

`make build`

### Run the Docker Container:

`make run`
