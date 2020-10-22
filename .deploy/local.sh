#!/bin/bash

SERVER_IP=149.28.133.5
BITBUCKET_REPO_SLUG=pigeon_website
BITBUCKET_BRANCH=production
DOCKER_REGISTRY=docker-regitry.vicoders.com
SERVICE_NAME=pigeon_website

docker build --rm -f "Dockerfile" -t $DOCKER_REGISTRY/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH "."

docker push docker-registry.vicoders.com/pigeon_website:production

sh ./.deploy/deploy.sh
