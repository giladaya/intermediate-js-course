# Intermediate JavaScript course

This is the source code and training content for Intermediate JavaScript course

## Notes
1. This repo was adapted from [a Web Development Course repo](https://github.com/andrewsouthpaw/webdev) by Andrew Smith
2. All slides can be found [here in google drive](https://drive.google.com/drive/folders/1uQ1mojp7TBedK5tu3IGvGVmCcpW9KUsp?usp=sharing)

## Before you begin

Start by forking and cloning the repo. If you don't clone the repo, then you won't be able to save your work on exercises to your own cloned repo. Choose to not fork at your own risk.

Once you've cloned the repo, set this repo as the `upstream`

```
$ git remote add upstream https://github.com/AndrewSouthpaw/webdev.git
```

When I update the repo and you want to pull the recent changes in upstream:

```
$ git checkout master
$ git pull upstream master
```

You're encouraged to work on a branch during the course, so you can easily re-play your changes on top of any updates I make by running a little helper script:

```
$ bin/branchupdate
``` 

## Setup

We're going to walk through installation of the following:

- nvm
- Node.js
- yarn

If you already have these installed, then skip ahead.

### `nvm`

**This is for macOS and Linux only. Windows users can just go to nodejs.org and install there.**

You can install a single version of Node.js, but the more common practice is to install [`nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm), which allows you manage multiple versions of node on the same system.

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Running this command downloads and runs the script in your shell.

Note the output: `nvm` will automatically update one of your profile files in your home directory (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`, it tries to make a reasonable guess).
 
**Open a fresh shell** and verify you can access `nvm` now:

```shell
$ nvm --version
0.37.2

$ echo $NVM_DIR
/some/path/to/.nvm
```

(In case you're curious and noticed it, `$ which nvm` doesn't work because `nvm` is a function sourced from a shell script and is not an executable binary.)

### Node.js

Now you can download a recent version of Node.js. As of this writing, it's `12.13.0` (Erbium). Node.js goes through lots of iterations, but it releases Long-Term Support (LTS) versions that are promised to be stable and maintained for a long time. The easiest way to get a version:

```shell
$ nvm install 12

or...

$ nvm install lts/erbium
``` 

Use `$ nvm ls` to look at all the LTS Node.js versions.

### `npm`

It comes with your Node.js install. Verify the installation with:

```bash
$ npm --version
```

**NB: Avoid `sudo` with `npm`**: If you ever install packages with `npm` and you are prompted to use `sudo`, something has gone wrong. Don't do it, as it will all end in tears and your system can get very messed up.

### `yarn`

`npm` is nice and all, but `yarn` (a competitor to `npm`) is better. If you're on Windows, you can use the yarn installer from their website. If you're on Mac/Linux, you can do this command from the CLI:

```bash
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Text Editor

You can use your favorite text editor to follow along.

I'm am fan of the [WebStorm](https://www.jetbrains.com/webstorm/) IDE by JetBrains. Free trial, not too expensive, definitely worth the money in my book.

[VS Code](https://code.visualstudio.com/) is the most popular open-source editor. Highly extensible, lots of important people swear by it. 

**What should I choose??** 😧

Try both, see what you like more. I live by the features offered by an IDE, but maybe you won't, or will hate their UX. Every person is different. For this course, I will be demoing code in an IDE.

### Local JS Environment

You can always open a console in Firefox or Chrome and get to a JS REPL.

Buuuut there's a cool app now called [RunJS](https://runjs.dev/) that allows you to write and evaluate JS in a much more satisfying way. I'll be using this as a scratchpad for demonstrations from time to time. (Firefox also has a scratchpad feature, I just never got into it.)  

## Folder Structure

### Slides

See link at the top

### Exercises

Most of the action lives inside `/src`, that's where you'll be doing most of your exercises.

Start by installing our dependencies:

```shell
$ cd src
$ yarn
$ yarn start
```

If you're a Windows user, you may also run into other security blocks like Windows Defender, just go ahead and cancel/ignore/permit any warnings.

Then visit <http://localhost:3000/js/>. This will lead you to various interactive pages and test suites that will be used throughout the course.

Other exercises will have you work with a Jest spec file and maybe an implementation file. In those cases, open one (or both) files for instructions. You can run the tests by running the commands in the prompt from the `/src` folder.

### Sandbox

There's a JS sandbox under `/sandbox`, with a skeleton JS starter project. Go into that directory and follow the `README.md` to get it running.
