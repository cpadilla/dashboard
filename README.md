# v-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Notes

* When installing the database, I was getting errors from running the script because of 'Unknown collation "utf8mb4_0900_ai_ci"'. I found a similar issue on StackOverflow and the solution was to change it to "utf8mb4_general_ci", which I did. Hopefully this doesn't change anything critical.
* I'm using vue-router with express routes. This allows the front end to keep routing history on the client, while allowing express to handle the api calls sent from the client. In order for this to work, vue router history is enabled.
* TODO: Implmement a route for `*` in order to catch all 404 error pages.
