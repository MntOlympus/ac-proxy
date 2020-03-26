const express = require('express')
const app = express()
const port = 3003
const cors = require("cors");
const http = require("http");
const httpProxy = require("http-proxy");
const path = require("path");

const proxy = httpProxy.createProxyServer({});

//***************MIDDLEWARE**************\\

console.log(__dirname)
app.use(cors());
app.use(express.static('public'));

app.all('/photos', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3001"
    });
})

app.all('/api/properties', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3000"
    });
} )

app.all('/api/listing', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3002"
    });
} )

app.all('/api/reviews', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3002"
    });
} )

app.all('/recommendations', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3009"
    });
} )



app.listen(port, () => console.log(`Proxy server is listening on port ${port}...`))