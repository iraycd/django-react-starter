#!/bin/bash

#install backend dependencies
mkdir -p pipcache
pip3 install --cache-dir=/app/pipcache -r requirements/dev.txt
