
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  var string = '';

  https.get(options,function(stream){

    stream.setEncoding('utf8');

    stream.on('data',function(data){
      string += data;
    });

    stream.on('end',function(){
      callback(string);
    });

  });

};

function printHTML (html) {
  console.log(html);
}

module.exports = {
  getHTML
};


// getHTML(requestOptions,printHTML);