# Beeline Pogressive Web Application

[![N|Solid](https://ypereirareis.github.io/images/posts/vuejs.jpg)](https://nodesource.com/products/nsolid)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# New Features!

  - Offline mode - Service Workers caching static files for rendering

### Tech

Beeline PWA uses a number of open source projects to work properly:

* [VueJS] - HTML enhanced for web apps!
* [Buefy] - lightweight UI components for Vue.js based on Bulma
* [LocalForage] - Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API
* [Axios] - Promise based HTTP client for the browser and node.js
* [Sw-toolbox] - A collection of tools for service workers
* [Serve] - A neat interface for listing the directory's contents and switching into sub folders.

#### Test for production
> Use Google Chrome to debug the Service Workers

For production release:
```sh
$ npm run build
```
Execute the 'dist' folder after it has been generated:
```sh
$ serve dist/
```
Navigate to the website:
```sh
localhost:5000/#/
```
Click on the **Application** tab and select the **Service Workers** tabs. Look for the **Offline** checkbox and reload the page.

#### Firebase hosting
To host Beeline PWA porject on firebase:

Generate the dist folder for production
```sh
$ npm run build
```
Install firebase-tools
```sh
$ npm install -g firebase-tools
```
Generate the necessary files
```sh
$ firebase init
```

Select your the hosting option upon running the aformentioned command, and select the appropriate firebase project. There are 2 files which will be generated in the root:
- **.firebaserc**
- **firebase.json**

Configure the  `firebase.json` file to reference the dist folder
```sh
{
  "hosting": {
    "public": "./dist"
  }
}
```

Deploy the project to firebase hosting
```sh
$ firebase deploy
```
### TODOs

 - Implement Notification API
 - Write UNIT TESTs

License
----

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [VueJS]: <https://vuejs.org>
   [Buefy]: <https://github.com/rafaelpimpa/buefy>
   [LocalForage]: <https://github.com/localForage/localForage>
   [Axios]: <https://github.com/axios/axios>
   [Sw-toolbox]: <https://github.com/GoogleChrome/sw-toolbox>
   [Serve]: <https://www.npmjs.com/package/serve>
   [Dillinger]: <https://github.com/joemccann/dillinger.git>

