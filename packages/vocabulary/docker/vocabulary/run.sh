#!/bin/bash

docker run \
  --interactive --tty \
  --volume node_modules:/codebase/node_modules \
  --volume "$(pwd)":/codebase \
  --net host \
  --name vocabulary-cmd \
  --rm \
  vocabulary:latest \
  bash
