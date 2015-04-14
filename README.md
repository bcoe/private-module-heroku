# Using Private Modules With Heroku

[![Build Status](https://travis-ci.org/bcoe/private-module-heroku.png)](https://travis-ci.org/bcoe/private-module-heroku)

## Heroku

```bash
cat ~/.npmrc
# grab the value from //registry.npmjs.org/:_authToken=[MY-TOKEN]
heroku config:set TOKEN MY-TOKEN
```

## Travis

1. enable the repo in your travis account.
2. set a `TOKEN` environment variable.

![GitHub Logo](/assets/env.png)

3. use the sample `.travis.yml` in this repo to get up and running:

```yaml
language: node_js
node_js:
  - "0.10"
  - "0.11"
  - "0.12"
  - "iojs"
before_install:
  - if [[ `node --version` =~ "v0.10" ]]; then npm install -g npm@latest; fi
  - printf "//registry.npmjs.org/:_authToken=$TOKEN" >> ~/.npmrc
```
