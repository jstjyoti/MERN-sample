import config from './config';
import apiRouter from './api/index';
import express from 'express';
const server = express();

//route
server.get('/', (req, res) => {
  res.render('index',{
    content: 'ejs template!'
  });
  //handler similar to http server module
  // res.send('hello from server'); // to send string send method
});

server.set('view engine', 'ejs');//dynamic ejs files will behave like routes

server.use('/api', apiRouter);
// server.use(express.static('public')); //with middleware

server.listen(config.port, () => {
  //listner function
  console.log('listening', config.port);
});
