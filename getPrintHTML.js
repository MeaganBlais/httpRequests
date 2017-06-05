var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var dataRecv = ''
  https.get(requestOptions, function (response) {
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
getAndPrintHTML()