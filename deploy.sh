#!/usr/bin/env sh


set -e


npm run build


cd dist

git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/CURLYFRIES90/module11.git main:gh-pages

cd -
