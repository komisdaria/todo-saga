require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./db/connect');
const TodoRoutes = require('./routes/todoRoutes');

const app = express();

connect();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/todos', TodoRoutes);

// app.get('/', (req, res) => {

// });

app.listen(8080, () => {
  console.log('Сервер запущен');
});
