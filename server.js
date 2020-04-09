import config from './config';
import express from 'express';
const server = express();

//route
server.get('/', (req, res) => {
  //handler similar to http server module
  res.send('hello from server'); // to send string send method
});

server.use(express.static('public')); //with middleware

///*without middleware*/ server.get('/about.html', (req, res) => {
//   //handler similar to http server module
//   // res.send('in about page'); // to send string send method
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  //listner function
  console.log('listening', config.port);
});
