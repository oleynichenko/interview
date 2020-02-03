const fs = require('fs');
const https = require('https');


function downloadImage(uri, filename){
  return new Promise((resolve,reject) => {
    request(uri, function(err, result, body) {
      if(err) {
        return reject(err);
      }

      request(uri)
        .pipe(fs.createWriteStream(filename))
        .on('close',() => resolve());
    });
  })
}

downloadImage('https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg', 'npm-logo.svg')
  .then(() => console.log('Images saved.'))
  .catch(er => console.error(er));