![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Q-Server 

### Author: 
Heather Cherewaty
Fletcher LaRue

### Links and Resources
[![Build Status](https://www.travis-ci.com/asdFletcher/10-project-q.svg?branch=master)](https://www.travis-ci.com/asdFletcher/10-project-q)

* [repo](https://github.com/asdFletcher/10-project-q)
* [travis](https://www.travis-ci.com/asdFletcher/10-project-q)


### Modules
#### `publisher.js`, `server.js`, `subscriber.js`
##### Exported Values and Methods
* Connection to server established and event emitted from `publisher.js`.
* Connection and events heard and ran on `server.js` from `publisher.js`; sends relevent information to subscribers who care about particular events on `logger.js`.
* Log information about events heard from `server` on `logger.js`.

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV.

#### Running the app
* `npm start`
* Endpoint: `/publisher.js`
  * Returns information to server
* Endpoint: `/server.js`
  * Listens for events from publisher, emits events to subscribers
* Endpoint: `/subscriber.js`
  * Emits events from server

#### Tests
* npm test (runs unit tests)
* npm run lint (runs linter tests)
* When `subscribe` is used on `logger.js`, we expect this method to have been called on `subscriber.js`.
* When `publish` is used on `simulator.js`, we expect this method to have been called on `publisher.js`.