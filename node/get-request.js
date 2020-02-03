const http = require('http');

const options = {
  hostname: 'ip.jsontest.com/',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d)
  })
});

req.on('error', error => {
  console.error(error)
})
;
req.end();