#!/usr/local/bin/bash
git checkout master
git pull upstream master
git checkout -
git rebase master --committer-date-is-author-date
