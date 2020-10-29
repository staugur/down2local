'use strict'

const http = require('http')
const url = require('url')
const get = require('simple-get')
const CFG = require('./config.json')

const HOST = CFG.host || '127.0.0.1'
const PORT = CFG.port || 5201
const isURL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/

http.createServer((request, response) => {
    request.on('error', err => {
        console.error(err)
        response.statusCode = 400
        response.end()
    })
    response.on('error', err => {
        console.error(err)
    })
    console.debug(request.headers)
    let req = url.parse(request.url, true)
    if (req.pathname === '/get') {
        let downUrl = req.query.url
        if (isURL.test(downUrl)) {
            get(downUrl, (err, res) => {
                if (err) {
                    response.end(err)
                } else {
                    console.debug(res.headers)
                    response.setHeader('Server', 'tcw/1.0')
                    response.setHeader(
                        'Content-Type',
                        res.headers['content-type']
                    )
                    response.setHeader(
                        'Content-Length',
                        res.headers['content-length']
                    )
                    //res.setHeader("Content-Disposition", "attachment; filename="+encodeURI(imgName));
                    res.pipe(response)
                }
            })
        } else {
            response.end('Invalid download url')
        }
    } else {
        response.writeHead(404)
        response.end('404 Not Found')
    }
}).listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
})
