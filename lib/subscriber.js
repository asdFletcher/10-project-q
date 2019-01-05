'use strict';

let io = require('socket.io-client');

class Q {
  constructor(namespace){
    // ~~~ connect to namespace ~~~
    this.namespace = namespace;
    this.emitter = io.connect(`http://localhost:3000/${namespace}`);
    this.subArr = [];
  }


  subscribe(room){
    // ~~~ connect to room ~~~
    this.emitter.emit('join', room);
    
    // push room to subArr (if it doesn't already contain)
    this.subArr.push(room);
  }

  // subscriptions(){
  //   return this.subArr;
  // }
}

module.exports = Q;

