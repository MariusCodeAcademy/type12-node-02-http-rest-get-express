const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request.url ===', request.url);
  const url = request.url;

  // make it switch
  switch (url) {
    case '/':
      response.writeHead(200, { 'content-type': 'text/html' });
      response.write('<h1>Welcome home page</h1>');
      break;
    case '/about':
      response.write('<h1>About us page</h1>');
      break;

    default:
      response.writeHead(404, { 'content-type': 'text/html' });
      response.write('<h1>page not found!!!</h1>');
  }
  response.end();
});

server.listen(3000);
