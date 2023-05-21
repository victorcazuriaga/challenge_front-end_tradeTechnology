#!/bin/bash
. "$(dirname "$0")/_/husky"
echo -e "\033[1mpre-commit\033[01m"
pnpm lint-staged