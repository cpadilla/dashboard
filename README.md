# Dashboard

## Project setup
```
npm install
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Notes

* When installing the database, I was getting errors from running the script because of 'Unknown collation "utf8mb4_0900_ai_ci"'. I found a similar issue on StackOverflow and the solution was to change it to "utf8mb4_general_ci", which I did. Hopefully this doesn't change anything critical.
* I'm using vue-router with express routes. This allows the front end to keep routing history on the client, while allowing express to handle the api calls sent from the client. In order for this to work, vue router history is enabled.

## Tasks left to do

* Implement filter by chosen status

