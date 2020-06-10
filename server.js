const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });;
const pathMatch = require('path-match')
const { parse } = require('url');
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  app.use(express.static('static'));
  const route = pathMatch();
  server.get('/users/:userId/about', (req, res) => {
    const params = route('/users/:userId/about')(parse(req.url).pathname);
    return app.render(req, res, '/about', params);
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
