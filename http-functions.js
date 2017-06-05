var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    var dataRecv = ''
    https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        dataRecv += data + '\n';
    });

    response.on('end', function(data) {
        callback(dataRecv);
    });
    })
};