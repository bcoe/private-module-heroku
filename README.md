# Using Private Modules With Heroku

Setup Heroku with your token:

```bash
cat ~/.npmrc
# grab the value from //registry.npmjs.org/:_authToken=[MY-TOKEN]
heroku config:set TOKEN MY-TOKEN
```
