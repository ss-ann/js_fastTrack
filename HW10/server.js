//Exercise 1

/*const http = require("http");
const os = require('os');
const path = require('path');


http.createServer(function (request,response){
    const user = os.userInfo().username;
    const uptimeMinutes = Math.floor(os.uptime()/ 60);
    const osType = os.type();
    const cwd = process.cwd();
    const fileName = path.basename(__filename);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
        <h1>System Information</h1>
        <p><b>User: </b>${user}</p>
        <p><b>OS Type: </b>${osType}</p>
        <p><b>System Uptime: </b>${uptimeMinutes} minutes</p>
        <p><b>Current Working Directory: </b>${cwd}</p>
        <p><b>Server file name: </b>${fileName}</p>
        `);
    response.end();
}).listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});*/

// Exercise 2
const http = require("http");
const os = require('os');
const personalModule = require('./personalmodule');

const username = os.userInfo().username;

const server = http.createServer((request, response) => {
    const greetMessage = personalModule.greetUser(username);
    const date = new Date().toString();

    const html =`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    </head>
    <body>
    <p>Date of request: ${date}</p>
    <p>${greetMessage}</p>
    </body>
    </html>
    `;
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
});

server.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});
