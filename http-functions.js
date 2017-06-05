module.exports = function getHTML (options, callback) {
    /* Your code here */
    // by including the https inside the function this avoids making it a private variable - BETTER? 
    var https = require('https');
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