var getHTML = require('../https-functions.js');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var stringArray = html.split('');
  for(var i = 0; i < stringArray.length; i++){
    if(stringArray[i] === 'a'){
      stringArray[i] = '4';
    }

    if(stringArray[i] === 'e'){
      if(stringArray[i+1] === 'r'){
        stringArray[i] = '0';
        stringArray[i + 1] = 'r';
      }
      else{
        stringArray[i] = '3';
      }
    }

    if(stringArray[i] === 'l'){
      stringArray[i] = '1';
    }

    if(stringArray[i] === 'o'){
      stringArray[i] = '0';
    }

    if(stringArray[i] === 's'){
      stringArray[i] = '5';
    }

    if(stringArray[i] === 't'){
      stringArray[i] = '7';
    }

    if(stringArray[i] === 'c' && stringArray[i+1] === 'k'){
      stringArray[i] = 'x';
      stringArray[i+1] = '';
    }

    if(stringArray[i] === 'y' && stringArray[i+1] === 'o' && stringArray[i+2] === 'u'){
      stringArray[i] = 'j';
      stringArray[i+1] = '0';
      stringArray[i+2] = '0';
    }
  }

  console.log(stringArray.join(''));
}

getHTML.getHTML(requestOptions, print1337);