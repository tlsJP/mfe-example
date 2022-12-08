# AngularMfe

This project implements micro frontends using angular CLI

## Cloning

This project includes a git submodule, so add `--recursive` to clone command: `$ git clone --recursive [this_repo_url]`

## Refs

https://www.npmjs.com/package/@angular-architects/module-federation

https://blog.briebug.com/blog/micro-frontends-angular

https://github.com/oktadev/okta-angular-microfrontend-example

## Deploy local

`$ npm run run:all` - starts the three applications

## Deploy Docker

`$ ng build --project admin`

`$ docker build -t mfe-admin -f projects/admin/Dockerfile .`

`$ ng build --project dashboard`

`$ docker build -t mfe-dashboard -f projects/dashboard/Dockerfile .`

`$ ng build --project shell`

`$ docker build -t mfe-shell -f projects/shell/Dockerfile .`


## Notes

Remote modules need to ensure that their `app-routing.moudles.ts` are updated to specify routes
