'use strict';

// import stuff, simulator, qserver, listener

// describe tests
describe('the server', () => {

  it('does stuff', ()=> {
    // publisher
    const Publisher = require('./lib/publisher.js');
    const publisher = new Publisher;
    
    // server
    const server = require('./lib/server.js');
    server.start();
    const serverDB = new Server('database');
    serverDB.monitorEvent('create');
    serverDB.monitorEvent('update');
    serverDB.monitorEvent('delete');
    
    // subscriber
    const Subscriber = require('./lib/subscriber.js');
    const subscriber = new Subscriber('database');
    subscriber.subscribe('delete', (payload) => {
      console.log('delete happened', payload);
    });

    // expect to see an event come out of here
    Q.publish('database', 'delete', {id:77});
    
    // expect the server to recevie that event
    // mystery  code here

    // expect the subscriber to see the event
    // mysterey code here



  });

});