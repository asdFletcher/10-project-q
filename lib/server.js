'use strict';

const util = require('util');

let io;

class Q{
  constructor(namespace){
    this.validRooms = [];
    this.namespace = namespace;

    io.of(`/${namespace}`).on('connect', (socket)=> {
      console.log(`${this.namespace} connection detected`);
      socket.on('join', (room, cb) => {
        // console.log(`socket befor ecall: ${util.inspect(socket)}`);
        let newFunction = handleJoin.bind(this, room, socket);
        newFunction(room, socket);
      });
    });
  }

  monitorEvent(room){
    this.validRooms.push(room);
  }

  static start(){
    io = require('socket.io')(3000);
    
    io.on('connect', (socket) => {
      console.log('default connection detected');
    });
  }
}

function handleJoin(room, socket){
  console.log(`in handle join. this:${this}, room:${room}, socket.id:${socket}`);
  if (this.validRooms.includes(room)){
    console.log(`Connecting someone to the room: ${room}`);
    socket.join(room);
  } else {
    console.log(`server says: rejected join on room: ${room}`);
  }
}

module.exports = Q;