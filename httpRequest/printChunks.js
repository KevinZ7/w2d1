var https = require('https');


function getAndPrintHTMLChunks(){

  var requestOptions ={
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('chunks with length' + data.length + '\n' + data + '\n');
    });

    response.on('error', function(err){
      if(err){
        throw err;
      }
    });

    response.on('end', function(){
      console.log("program have finally finished!");
    });

  });

}

// getAndPrintHTMLChunks();

