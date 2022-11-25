const server = require('net').createServer();
const port = 8000

server.on('connection',(socket) => {
    console.log('Client connected');

    socket.write('Welcome new client!\n');

    socket.on('data', (data) => {
        console.log('data : ',data);
        socket.write('data : ');
        socket.write(data);
    });
    socket.setEncoding('utf8');
    socket.on('end',()=>{
        console.log('Client Disconnected');
    });
});

server.listen(8080,()=>{
    console.log('Server Running on '+ server.address().address);
});