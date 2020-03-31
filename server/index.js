const express = require('express')
const app = express()
const port = 3001
const cors = require("cors");
const http = require("http");
const httpProxy = require("http-proxy");
const path = require("path");

const proxy = httpProxy.createProxyServer({});

//***************MIDDLEWARE**************\\

app.use(cors());
app.use(express.static('public'));

app.all('/photos', (req, res) => {
  proxy.web(req, res, {
      target: "http://ec2-3-101-43-150.us-west-1.compute.amazonaws.com:3001"
    });
})

app.all('/api/properties', (req, res) => {
  proxy.web(req, res, {
      target: "http://ec2-13-59-243-8.us-east-2.compute.amazonaws.com"
    });
} )

// app.all('/api/listing', (req, res) => {
//   proxy.web(req, res, {
//       target: "http://localhost:3002"
//     });
// } )

// app.all('/api/reviews', (req, res) => {
//   proxy.web(req, res, {
//       target: "http://localhost:3002"
//     });
// } )

app.all('/recommendations', (req, res) => {
  proxy.web(req, res, {
      target: "http://ec2-3-89-251-90.compute-1.amazonaws.com:3009"
    });
} )



app.listen(port, () => console.log(`Proxy server is listening on port ${port}...`))