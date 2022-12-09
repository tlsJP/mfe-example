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

Just run the batch file...
`> .\deploy_docker.bat`

## Notes

Remote modules need to ensure that their `app-routing.moudles.ts` are updated to specify routes
