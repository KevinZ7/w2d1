var getHTML = require('../https-functions.js');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  console.log(html.toUpperCase());

}

getHTML.getHTML(requestOptions, printUpperCase);