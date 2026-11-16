#!/bin/sh
# Builds the three review versions into dist-review/{a,b,c} plus a chooser page at the root.
set -e
cd "$(dirname "$0")/.."
npx tsc -b
rm -rf dist-review && mkdir dist-review
for v in a b c; do VITE_VARIANT=$v npx vite build --outDir dist-review/$v --emptyOutDir >/dev/null; done
cp scripts/chooser.html dist-review/index.html
touch dist-review/.nojekyll
echo "built: $(du -sh dist-review | cut -f1)"
