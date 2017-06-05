var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
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

function printHTML (html) {
  console.log(html);
}




getHTML(requestOptions, printHTML)