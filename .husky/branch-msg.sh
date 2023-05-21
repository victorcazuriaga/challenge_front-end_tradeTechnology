#!/bin/bash
echo -e "\033[1mbranch-msg\033[01m"

local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex="^((challenge)-\w*)$"

message="\e[1;31mThere is something wrong with your branch name, your commit will be rejected. You should rename your branch to a valid name and try again.
"

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; then
    echo -e "$message"
    exit 1
fi

exit 0