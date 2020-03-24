const express = require('express')
const app = express()
const port = 3003
const cors = require("cors");
const http = require('http');
const httpProxy = require("http-proxy");
const path = require("path");


const proxy = httpProxy.createProxyServer({});

//***************MIDDLEWARE**************\\

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/photos', (req, res) => {
  proxy.web(req, res, {
      target: "http://localhost:3001/"
    });
} )

app.listen(port, () => console.log(`Proxy server is listening on port ${port}...`))