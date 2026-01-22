const serverless = require('serverless-http');
const app = require('./server');

const handler = serverless(app, {
  request: (req, event, context) => {
    // Preserve the original URL path from Vercel
    if (req.headers['x-vercel-proxy-signature']) {
      req.url = req.headers['x-matched-path'] || req.url;
    }
  }
});

module.exports = async (req, res) => {
  // Log the actual request URL for debugging
  console.log('Vercel request URL:', req.url);
  console.log('Vercel headers:', JSON.stringify(req.headers, null, 2));
  return handler(req, res);
};
