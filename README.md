# SpotiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Este app no tiene la actualizacion automatica del toquen, en este caso hay que entrar posmant

hacer un post a https://accounts.spotify.com/api/token
con estos datos:

[{"key":"grant_type","value":"client_credentials","description":"","type":"text","enabled":true},{"key":"client_id","value":"36ab27336c27496d8e32e0ecbd329856","description":"","type":"text","enabled":true},{"key":"client_secret","value":"d787156c5c6042a6a60a9d3b9c2d5e6b","description":"","type":"text","enabled":true}]
luego hacer un get con resultado, digase el tocken

https://api.spotify.com/v1/browse/new-releases?Authoti

[{"key":"Authorization","value":"Bearer BQAVwrMqBUCviRhE1TaE8oHwPf8B1mkLU4VUnQKpspSkTK7Bqy38-XO0F4Dzb2VcjrPDeTfekfQ7Pd856Xo","description":null,"type":"text","enabled":true,"equals":true}]
