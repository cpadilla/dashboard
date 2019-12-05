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
  var filter = req.params.filter;
  console.log("api/orders called");

  var query_str = "SELECT " +
                  "OrderSystem.orderStatus.name AS 'Status', " +
                  "OrderSystem.orders.orderId AS 'Order ID'," +
                  "OrderSystem.orders.orderDescription AS 'Description', " +
                  "OrderSystem.orders.createDate AS 'Create Date', " +
                  "OrderSystem.orders.shippedDate AS 'Shipped Date', " +
                  "OrderSystem.orders.shippingAddressId FROM orders " +
                  "INNER JOIN OrderSystem.orderStatus " +
                  "ON OrderSystem.orders.orderStatusId = OrderSystem.orderStatus.orderStatusId " +
                  "WHERE OrderSystem.orderStatus.orderStatusId = " + mysql.escape(filter)
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

function getAddress(req, res, next) {
  var addressId = req.params.addressId;
  console.log("api/locate/" + addressId + " called");

  var query_str = 'SELECT * from OrderSystem.shippingAddress where shippingAddressId = ' + addressId;
  database.query(query_str).then( rows => {
    // do something with the result
    // TODO: check that rows is not empty
    let msg = { address: rows[0] }
    //msg.orders = rows;
    res.json(msg).end()
  })
  .catch(err => {
    console.log("Error: ", err)
  });
}

function addOrder(req, res, next) {
  console.log("api/addOrder called");
  console.log(req.body);

  var order = req.body;
  var insert_address_query = "INSERT INTO shippingAddress values (null, " +
    mysql.escape(order.address) + ", " +
    mysql.escape(order.city) + ", " +
    mysql.escape(order.state) + ", " +
    mysql.escape(order.zip) +")";

  database.query(insert_address_query).then( rows => {
    // do something with the result
    console.log("successful insert...");

    var addressId_query = "SELECT LAST_INSERT_ID() as id;";
    database.query(addressId_query).then( rows => {
      var shippingAddressId = rows[0].id;
      console.log("shippingAddressId: ", shippingAddressId);

      var insert_order_query = "INSERT INTO orders values (null, " +
        mysql.escape(order.orderStatus) + ", " +
        mysql.escape(order.description) + ", NOW(), null, " +
        shippingAddressId + ")";
      database.query(insert_order_query).then( rows => {
        console.log("successfully inserted new order");
        res.end()
      }).catch(err => {
        console.log("Error: ", err)
      })
    }).catch(err => {
      console.log("Error: ", err)
    })

    //let msg = { address: rows[0] }
    //msg.orders = rows;
    //res.json(msg).end()
  })
  .catch(err => {
    console.log("Error: ", err)
  });
}

/* ========================================
 *                Routes
/* ========================================

/* GET users listing. */
router.get('/orders/:filter', getOrders);
router.get('/locate/:addressId', getAddress);
router.post('/addOrder', addOrder);

module.exports = router
