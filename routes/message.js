var express = require('express')
var router = express.Router()
var util = require('util')

/**
 * Connect to the MySQL database
 */

var mysql      = require('mysql');
/* This config should be moved to a local config file. */
var config = {
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'OrderSystem'
};

// Async Database class wrapper
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

var database = new Database(config);

function getOrders(req, res, next) {
  console.log("api/orders called");

  var query_str = 'SELECT * from OrderSystem.orders';
  database.query(query_str).then( rows => {
    // do something with the result
    let msg = { orders: rows }
    //msg.orders = rows;
    res.json(msg).end()
  })
  .catch(err => {
    console.log("Error: ", err)
  });
}

/* ========================================
 *                Routes
/* ========================================

/* GET users listing. */
router.get('/orders', getOrders);

module.exports = router
