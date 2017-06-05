var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  var dataRecv = ''
  https.get(options, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
      // when the following was 'return' instead of the var name, nothing was returned
    dataRecv += data + '\n';
  });

  response.on('end', function() {
    console.log(dataRecv);
    // Response stream complete.
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)