'use strict';

let io = require('socket.io-client');
const util = require('util');

class Q {
  constructor(namespace){
    // ~~~ connect to namespace ~~~
    this.namespace = namespace;
    this.serverConnection = io.connect(`http://localhost:3000/${namespace}`);
    this.subArr = [];
  }


  subscribe(room, cb){
    console.log(`subscriber: ${room}, ${this.namespace}`);
    // ~~~ connect to room ~~~
    this.serverConnection.emit('join', room);
    
    // push room to subArr (if it doesn't already contain)
    this.subArr.push(room);

    this.serverConnection.on(room, (payload)=>{
      cb(payload);
    });
  }

  subscriptions(){
    return this.subArr;
  }
}

module.exports = Q;

