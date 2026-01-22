const serverless = require('serverless-http');
const app = require('./server');

const handler = serverless(app, {
  request: (request, event, context) => {
    // Vercel rewrites strip the path - restore it from the original URL
    // The original URL comes in event.path or we can parse from headers
    const originalUrl = event.path || request.url;
    console.log('serverless-http request transform, setting url to:', originalUrl);
    request.url = originalUrl;
    request.originalUrl = originalUrl;
  }
});

module.exports = async (req, res) => {
  console.log('Vercel request URL:', req.url);
  return handler(req, res);
};
