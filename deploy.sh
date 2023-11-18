#!/usr/bin/env sh

# abort on errors
set -e

rm -rf .nuxt/*

# build
bun generate

# navigate into the output directory
cd ./dist

git init
git add -A
git commit -m 'deploy'

# deployment
git push -f git@github.com:N-eeraj/nuxt-packages.git main:production

cd -