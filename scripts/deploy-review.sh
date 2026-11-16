#!/bin/sh
# Publishes dist-review/ to the gh-pages branch (kept as a git repo inside dist/).
set -e
cd "$(dirname "$0")/.."
./scripts/build-all.sh
find dist -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist-review/. dist/
cd dist && git add -A && git commit -qm "Deploy review versions" && git push -q -f origin gh-pages
echo deployed
