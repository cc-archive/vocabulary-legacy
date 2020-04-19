#!/bin/bash

INTERACTIVE="--interactive"
TTY="--tty"
while getopts ":it" opt; do
  case ${opt} in
    i)    INTERACTIVE="" ;;
    t)    TTY="" ;;
    [?])  ;;
  esac
done
shift $((OPTIND-1))

docker run \
  ${INTERACTIVE} ${TTY} \
  --cap-add=SYS_ADMIN \
  --shm-size=1gb \
  --volume node_modules:/codebase/node_modules \
  --volume "$(pwd)":/codebase \
  --env-file docker/puppeteer/env_vars \
  --net host \
  --name puppeteer-cmd \
  --rm \
  puppeteer:latest \
  "${@:-bash}"
