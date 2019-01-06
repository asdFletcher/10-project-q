'use strict';

const util = require('util');

let io;

class Q{
  constructor(namespace){
    this.validRooms = []; // 'create'
    this.namespace = namespace;
    this.adminNamespace = io.of(`/${namespace}`);
    
    this.adminNamespace.on('connect', (socket)=> {
      console.log(`${this.namespace} connection detected`);
      socket.on('join', (room, cb) => {
        // console.log(`socket befor ecall: ${util.inspect(socket)}`);
        let newFunction = handleJoin.bind(this, room, socket);
        newFunction(room, socket);
      });
    });
    // socket.on(namespace, (room, payload) => {
    //   console.log('Server: i heard a database namespace evenet');
    // });

  }

  
  monitorEvent(room){ // 'create'
    this.validRooms.push(room); // 'create'

    // io.to.(queue).in(event).emit( (??? something ???), payload)
    // socket.on(room, () => { // 'create'
    //   io.in(namespace).emit(room, payload);
    // });

  }

  static start(){
    io = require('socket.io')(3000);
    
    io.on('connect', (socket) => {
      console.log('default connection detected');
      
      socket.on('event', (namespace, room, payload) => {
        // console.log('Server: i heard a database namespace evenet');
        // console.log(`namespace: ${namespace}, room: ${room}, payload: ${payload}`);
        // handleEvent(namespace, room, payload);

        // we have: the namespace that the informaiton should go to
        // we have: the room that the informaiton should go to
        // we have: the information
        // we need to: send the information to that place
        // io.in(room).emit(room, payload);
        console.log('Server: i am emitting');
        console.log(this);
        console.log(this.validRooms);
        // console.log(this.adminNamespace);
        // this.adminNamespace.to('database').emit('delete', payload);
        // socket.to('database').emit('delete', payload);
        // socket.to('database').emit('delete', payload);
        // adminNamespace.to('level1').emit('an event', { some: 'data' });

      });
    });
  }

}

function handleJoin(room, socket){
  // console.log(`in handle join. this:${this}, room:${room}, socket.id:${socket}`);
  if (this.validRooms.includes(room)){
    console.log(`Server: Connecting a user to room: ${room}, in namespace: ${this.namespace}`);
    socket.join(room, ()=>{
      // io.to(room).emit('database', 'test');
    });
  } else {
    console.log(`Server: Rejecting a user from room: ${room}, in namespace: ${this.namespace}`);
  }
}


module.exports = Q;