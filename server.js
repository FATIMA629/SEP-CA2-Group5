var app = require('./controller/app.js');

var server = app.listen(4049, function () {
    var port = server.address().port;
    console.log('Web App Hosted at http://localhost:%s/B/selectCountry.html', port);
});