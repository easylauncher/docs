---
layout: post
title:  "Git Workflow"
date:   2025-01-18 17:46:09 +0530
categories: easylauncher update
---


## Overview

This workflow is created by following the strategy when 'Master/main branch is always production deployable' 
So the master branch always has the changes ready for production. 

## Project Info

<form id="project_input">
  <label for="base_branch_name">Base Branch Name:</label>
  <input type="text" id="base_branch_name" name="base_branch_name" placeholder="Enter base branch name">
  <label for="user_name">Your Name:</label>
  <input type="text" id="user_name" name="user_name" placeholder="Enter your name">
  <label for="user_email">Your Email:</label>
  <input type="text" id="user_email" name="user_email" placeholder="Enter your email">
  <label for="repo_url">Repo URL:</label>
  <input type="text" id="repo_url" name="repo_url" placeholder="Enter repo url">
  <label for="feature_name">Feature Name:</label>
  <input type="text" id="feature_name" name="feature_name" placeholder="Enter feature name">
</form>


## Get code locally and basic configs 

- Clone the repository to local system 

```bash
git clone <repo_url>
```

- Go inside the cloned project directory 

```bash
cd <project_dir>
```

- Set your name current git repo

```bash
git config user.name "<user_name>"
```

- Set you email globally for git

```bash
git config user.email "<user_email>"
```
 

## Start working on a new feature 

1. Checkout to main branch 
```bash
git checkout <base_branch_name> 
```
1. Update code from main
```bash
git pull origin <base_branch_name>
```
1. Create a new branch from main (Make the branch name relevant to feature and fix we are working) 
```bash
git checkout -b <feature_name>
```
1. Make local changes, Modify the files which you want to. (Do your coding and all) 
1. Add files to git 
```bash
git add <file1> <file2> <file3> ... 
```
1. Commit changes to local 
```bash
git commit -m '<feature_name>'
```
1. Update master branch of the repo with latest remote changes 
```bash
git checkout <base_branch_name> 
git pull origin <base_branch_name>
```
1. Switch back to working branch
```bash
git checkout <feature_name> 
```
1. Rebase with master and resolve conflict if any 
```bash
git rebase <base_branch_name>
```
1. Push changes to new branch on remote 
```bash
git push origin <feature_name>
```

## Create a Pull/Merge request:

1. Go to git repository on your browser 
1. Create a new pull request to main branch
1. Verify the new changes from PR 
1. Merge the changes with main branch


## Rebase and resolve conflict 

1. Check if you have any modified files which are not committed 
```bash
git status
```
1. If there are any modified files then commit them first
1. Initiate the rebase process (from main branch) 
```bash
git rebase <base_branch_name>
```
1. Check if there are any conflicts 
```bash
git status
```
1. If there are any conflicts then follow these steps. If not skip to the end.
1. Open conflicted files  and resolve code conflicts in each conflicted file 
1. Add the resolved conflicted files to git 
```bash
git add <file1> <file2> … 
```
1. Now resume the rebase process 
```bash
git rebase --continue
```
1. Check if there is conflict in any other files  
```bash
git status
```
1. If there is still conflicts in file go to step 5 again 
1. Rebase is done. 

<script src="/assets/js/github-workflow.js"></script>
