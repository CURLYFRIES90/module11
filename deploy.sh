#!/usr/bin/env sh

set -e
nmp run build


cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:CURLYFRIES90/vue-pages.git master:gh-pages

cd -