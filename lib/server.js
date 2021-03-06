'use strict';

const util = require('util');

let io;

class Q{
  constructor(namespace){
    this.validRooms = [];
    this.namespace = namespace;
    console.log('I am in the server constructor');
    this.adminNamespace = io.of(`/${namespace}`);
    
    this.adminNamespace.on('connect', (socket)=> {
      socket.on('join', (room, cb) => {
        let newFunction = handleJoin.bind(this, room, socket);
        newFunction(room, socket);
      });
    });

    io.on('connect', (socket) => {
      socket.on('event', (namespace, room, payload) => {
        this.adminNamespace.to(room).emit(room, payload);
      });
    });

  }
  
  monitorEvent(room){
    this.validRooms.push(room);
  }

  static start(){
    io = require('socket.io')(3000);
  }

  static stop(){
    io.close();
  }
}

function handleJoin(room, socket){
  if (this.validRooms.includes(room)){
    console.log(`Server: Connecting a user to room: ${room}, in namespace: ${this.namespace}`);
    socket.join(room);
  } else {
    console.log(`Server: Rejecting a user from room: ${room}, in namespace: ${this.namespace}`);
  }
}


module.exports = Q;