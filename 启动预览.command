#!/bin/zsh
cd "${0:A:h}"
BUNDLED_NODE="/Users/dazhuxiaozhuluoyupan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"
if [[ -x "$BUNDLED_NODE/node" ]]; then
  export PATH="$BUNDLED_NODE:$PATH"
fi
if [[ ! -d node_modules ]]; then
  npm ci || exit 1
fi
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173
