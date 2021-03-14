// const Logger = require('./Logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener:', data));

// logger.log("Hello world")

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'Cotent-Type': 'text/html' });
            res.end(content)
        })


        // res.end('<h1>home</h1>')
    }
    if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'Cotent-Type': 'text/html' });
            res.end(content)
        })


        // res.end('<h1>home</h1>')
    }

    if(req.url === '/api/users'){
      const users = [
          { name: 'Zack', age:31 },
          { name: 'Someone else', age:39 }
      ];

      res.writeHead(200, { 'Cotent-Type': 'application/json' });
      res.end(JSON.stringify(users))
        // res.end('<h1>home</h1>')
    }
});

const PORT = process.env.port || 5000;

server.listen(5000, () => console.log(`server running: ${PORT}`));
