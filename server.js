import config from './config';
import express from 'express';
const server = express();

//route
server.get('/', (req, res) => {
  //handler similar to http server module
  res.send('hello from server'); // to send string send method
});
server.get('/about.html', (req, res) => {
  //handler similar to http server module
  res.send('in about page'); // to send string send method
});
server.get('/contact.html', (req, res) => {
  //handler similar to http server module
  res.send('in contact page'); // to send string send method
});

server.listen(config.port, () => {
  //listner function
  console.log('listening', config.port);
});
