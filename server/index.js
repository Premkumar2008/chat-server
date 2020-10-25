const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors')
const {addUser, getUser,getUsersInRoom} =  require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server  = http.createServer(app);
const io = socketio(server);
app.use(cors());
io.on('connection', (socket) => {
   console.log('New user Joined');

    socket.on('join',({customername,mobilenumber,itemsordered}, callback) => {
        //console.log('user==========================================================', user);
        const {error, user} = addUser({id:socket.id, customername,mobilenumber,itemsordered});
        console.log('user==========================================================', user);
        console.log('Join==========================================================', customername, mobilenumber);
       // if(error) return callback(error);
       if (user) {
          socket.join('message1');
          socket.emit('message',{user:'',text:`Hi ${user.customername}, welcome to chat room and you ordered ${user.itemsordered}`});
          socket.broadcast.to('message1').emit('message', {user:'',text:`${user.customername}, has joined! and ordered ${user.itemsordered}`});
          
          console.log(customername,mobilenumber,itemsordered);
       }
        
       // callback();
    });

    socket.on('sendMessage', (MessageChannel, callback)=>{
        console.log('Send Message', MessageChannel, socket.id);
        const user = getUser(socket.id);
        if (user) {
          io.to('message1').emit('message', {user:user.customername,text: MessageChannel});
        }
       callback();
    })

    socket.on('disconnect', () => {
        console.log('User had disconnected');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Sever started on port ${PORT}`))

