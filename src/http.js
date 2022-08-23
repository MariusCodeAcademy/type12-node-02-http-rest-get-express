const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request.url ===', request.url);
  const url = request.url;

  // make it switch

  if (url === '/') {
    response.write('<h1>Welcome home page</h1>');
    // baigiam atsaka
    response.end();
  } else if (url === '/about') {
    response.write('<h1>About us page</h1>');
    // baigiam atsaka
    response.end();
  } else {
    response.write('<h1>page not found</h1>');
    // baigiam atsaka
    response.end();
  }
});

server.listen(3000);
