var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var string = '';

  https.get(options,function(stream){

    stream.setEncoding('utf8');

    stream.on('data',function(data){
      string += data;
    });

    stream.on('end',function(){
      console.log(string);
    });

  });

}

getAndPrintHTML(requestOptions);