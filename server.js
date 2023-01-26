const http = require('http')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxy()

const targetUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/'

http.createServer(function (req, res) {
  proxy.web(req, res, {changeOrigin: true, target: targetUrl });
}).listen(3001);

proxy.on('proxyError', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end('Something went wrong.');
});