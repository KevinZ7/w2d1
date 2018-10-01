var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(err){
  throw err;
})
.on('response', function(response){
  console.log('response message: ' + response.statusMessage + '\n' + 'content type: ' + response.headers['content-type'] + '\nDownloading image...');
})
.pipe(fs.createWriteStream('./downloaded.html'))
.on('finish', function(){
  console.log('Download complete.');
});