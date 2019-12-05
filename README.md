# Dashboard

## Project setup
```
npm install
```

### Build project
```
npm run-script build
```

### Start project
```
npm start
```

### Start the database
This assumes you have a mysql database set up locally. In my case, I set up MariaDB on linux, so this is the command to start the databse.
```
sudo systemctl start mariadb
mysql -u root -p
```
MariaDB is an open source database client for MySQL. I keep the credentials for the database in the hard-coded in the source code as `root` and `root`. In production, this should be kept in a local config file. There's a number of node packages for managing config files.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Dependencies

## NPM Packages
See [Dependencies](https://github.com/cpadilla/dashboard/network/dependencies) for a full list of the dependecies as outlined in the package.json.

## Overview of dependencies
Some of the dependecies came included with the initial project setup. To begin, I used the [vue-express-generator](https://www.npmjs.com/package/vuejs-express-generator) to set up the boiler-plate code for the project as simply as:
```
vue-express dashboard
```
In addition to the packages included in this, I added the following:

#### [axios](https://github.com/axios/axios)
Promise based HTTP client for making POST requests.

#### [bootstrap](https://github.com/twbs/bootstrap)
Bootstrap theme.

#### [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue)
Bootstrap component and grid implementation for VueJS.

#### [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)
I had added this as a simple fix for falling back routes to index.html, but that was because I was using history mode in Vue as opposed to hash mode. Hash mode starts the app path with `#/` and makes it easier to enable server side rendering of the Vue app. This package can be safely removed.

#### [jquery](https://github.com/jquery/jquery)
jQuery JavaScript Library.

#### [msql](https://github.com/mysqljs/mysql)
A pure node.js JavaScript Client implementing the MySQL protocol.

#### [node-sass](https://github.com/sass/node-sass)
This was included as a default dependencies with the vue-express generated boiler plate template, but I would have added it even if it had not been. I use scss as a stylesheet pre-processor.

#### [popper.js](https://github.com/popperjs/popper.js)
I had originally included this package because of an error I encountered that mentioned popper.js not being found. I don't think including this package fixed the error I encountered, but it may not be needed anymore.

#### [pug](https://github.com/pugjs/pug)
Template engine for Node.js. Basically HTML without the tags.

#### [pug-plain-loader](https://github.com/yyx990803/pug-plain-loader)
Webpack loader that transforms pug templates to plain HTML. Used for pug in vue templates.

#### [vue-icon](https://github.com/qinshenxue/vue-icon)
Feather Icons for vue.

#### [vue-router](https://github.com/vuejs/vue-router)
The official router for Vue.js.

#### [vuex](https://github.com/vuejs/vuex)
Centralized State Management for Vue.js. 

## Notes

* When installing the database, I was getting errors from running the script because of 'Unknown collation "utf8mb4_0900_ai_ci"'. I found a similar issue on StackOverflow and the solution was to change it to "utf8mb4_general_ci", which I did. Hopefully this doesn't change anything critical.
* I'm using vue-router with express routes. This allows the front end to keep routing history on the client, while allowing express to handle the api calls sent from the client. The Vue app runs in hash mode by default (as opposed to history mode) which allows the Vue Router to handle routing on the client side without reloading the page. Express.js routing is used for `/api/` calls to the server for fetching orders from and inserting new orders into the database.
* Every Vue component (including the main App.vue) separates the three main elements of the Vue template into separate files: the `script.js` javascript file, the `template.pug` pug template file, and the `style.scss` sass stylesheet. Each component has it's own directory containing these files, which makes the organizes the project very neatly and prevents Vue component files from becoming obscenely large. If desired, each component directory could be condensed into a single `.vue` file instead.


## TODOs

There are few minor TODO items left in the project but I figured they are minor enough they can be completed at a later time. While I believe all of the requirements have been met, there are still some additionally items I would like to do (that I still might) to improve the dashboard.
 
* Add another state variable to "remeber" which tab was selected when returning to the Dashboard from the Map component
* Add an animation when moving between the Dashboard and the Map component
* Small style touchups
* Clean up code and improve inline documentation

Overall, I'm pretty satisfied with the results and I hope this README is sufficient for documentation purposes.

