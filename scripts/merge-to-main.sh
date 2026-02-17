#!/bin/bash

# Merge current branch to main
git fetch origin main
git checkout main
git merge v0/cuervodel88-6a7f17b2 --no-ff -m "Merge: Complete portfolio restructure to Next.js with leadership focus"
git push origin main
