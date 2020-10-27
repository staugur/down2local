'use strict'

const http = require('http')
const CFG = require('./config.json')

const HOST = CFG.host || '127.0.0.1'
const PORT = CFG.port || 3000

http.createServer((req, res) => {
    console.log(req.url, req.path)
    res.end('index')
}).listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
})
