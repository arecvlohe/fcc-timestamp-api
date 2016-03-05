import express from 'express';
import morgan from 'morgan';
import parse from './parse';
import config from '../config';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'jade');

if (process.env.NODE_ENV === 'local' || 'test')
  app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:date', (req, res) => {
  const date = req.params.date;
  const timestamp = parse(date);
  res.json(timestamp);
});

app.use((req, res) => {
  res.status(400);
  res.render('404', { title: '404: File Not Found' });
});

app.use((error, req, res, next) => {
  res.status(500);
  res.render('500', { title:'500: Internal Server Error', error: error });
});

app.listen(config.port, (err) => {
  if (err)
    console.error(err);
  else
    console.log('%s running at http://%s:%s', config.app.name, config.hostname, config.port);
});
