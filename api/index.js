const serverless = require('serverless-http');
const app = require('./server');

// Store the original URL before serverless-http processes it
let originalRequestUrl = '/';

const handler = serverless(app, {
  request: (request, event, context) => {
    // Use the URL we captured before serverless-http
    console.log('serverless-http request transform, setting url to:', originalRequestUrl);
    request.url = originalRequestUrl;
    request.originalUrl = originalRequestUrl;
  }
});

module.exports = async (req, res) => {
  // Capture the original URL from Vercel's request
  originalRequestUrl = req.url;
  console.log('Vercel request URL (captured):', originalRequestUrl);
  return handler(req, res);
};
