/**
 * Created by gl on 16/06/16.
 */
var sql = require('mssql');

sql.connect("mssql://jins:gl_programmer2@86.96.194.194:2016/Tracking_db").then(function() {
    // Query

    new sql.Request().query('SELECT * FROM View_LiveVehicleSignal').then(function(recordset) {
        // console.log('Success..');
        console.log(recordset);
    }).catch(function(err) {
        // ... query error checks
        console.log(err);
    });

    // new sql.execute({})

});
