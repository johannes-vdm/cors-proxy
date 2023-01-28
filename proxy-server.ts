import http, { IncomingMessage, ServerResponse } from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});

proxy.on('error', (err: Error) => {
console.log(`Error occured: ${err.message}`);
});

const targetUrl = 'http://example.com/api';

http.createServer((req: IncomingMessage, res: ServerResponse) => {
  proxy.web(req, res, {changeOrigin: true, target: targetUrl }, (err:Error) => {
    if(err){
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.end(`Error occured: ${err.message}`);
    }
  });
}).listen(3001);

// NOTE Add a listener to log any proxy events
proxy.on('proxyReq', (proxyReq) => {
console.log(`Proxy request to ${proxyReq.path}`);
});

proxy.on('proxyRes', (proxyRes) => {
console.log(`Proxy response with status code ${proxyRes.statusCode}`);
});

// NOTE Add a listener to log any proxy events
proxy.on('proxyReq', (proxyReq) => {
console.log(`Proxy request to ${proxyReq.path}`);
});



proxy.on('proxyRes', (proxyRes) => {
console.log(`Proxy response with status code ${proxyRes.statusCode}`);
});