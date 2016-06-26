/**
 * Created by gl on 23/06/16.
 */
var sql = require('mssql');

sql.connect("mssql://devuser:Admin@123@192.168.1.5:56617/Test").then(function() {
    // Query

    new sql.Request().query('SELECT * FROM VehicleDetails').then(function(recordset) {
        // console.log('Success..');
        console.log(recordset);
    }).catch(function(err) {
        // ... query error checks
        console.log(err);
    });

    // new sql.execute({})

});