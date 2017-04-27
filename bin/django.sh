#!/bin/bash

#run django management command in development mode
source bin/env.sh

dcdev run --rm  backend ./bin/django.sh "$@"
