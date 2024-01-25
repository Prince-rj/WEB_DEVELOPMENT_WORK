
const io = require('socket.io')(8000)
const users={}
io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send', thisis=>{
        socket.broadcast.emit('recive', {message:thisis, name:users[socket.id]})
    })
    socket.on('disconnect',name=>{
        socket.broadcast.emit('left',users[socket.id])
        delete users[socket.id]
    })
})