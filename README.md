# MyAngularApp
# steps follow from creating angular project to deploy on cloud
# steps
1.create angular project => ng new [project/app name]
2.create components => ng genereate component [component-name] or ng g c [component-name]
3.create service => ng generate service [service-name] (mainly used for fetching data from api)
4.run angular app on local host => ng serve -o or ng serve
5.build angular application => ng build (application build file is created for deployment)
6.login on netlify using github and import code with build file on netlify.
7.provide path of angular app build file (dist/[app-name])
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deployment 
I deployed my angular application on netlify
url of netlify => https://papaya-marigold-aaf1d6.netlify.app/example

## for deployment
1. login via github on netlify
2. import code from github with build file already uploaded.
3. give path of your dist\[app-name]
4. click on deploy

