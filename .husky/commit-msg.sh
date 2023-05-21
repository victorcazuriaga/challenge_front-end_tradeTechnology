#!/usr/bin/env bash
. "$(dirname -- "$0")/_/husky"
echo -e "\033[1mcommit-msg\033[01m"
npx --no -- commitlint --edit ${1} &
wait
$(pwd)/$(dirname $0)/branch-msg