var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "z9N3Eif7Y5",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect