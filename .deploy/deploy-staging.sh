#!/bin/bash

ssh root@$SERVER_IP -p 1080 "docker pull docker-registry.vicoders.com/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH && docker service update --image $DOCKER_REGISTRY/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH --force pigeon_dev_website && docker system prune -f"
