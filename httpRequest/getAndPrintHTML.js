var https = require('https');



function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var string = '';

  https.get(requestOptions,function(stream){

    stream.setEncoding('utf8');

    stream.on('data',function(data){
      string += data;
    });

    stream.on('end',function(){
      console.log(string);
    });

  });

}

getAndPrintHTML();