const { connect } = require('mongoose');

// Закоментил опции, которые не работают в версии монгуса 6.0.0

const options = {
  useNewUrlParser: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // poolSize: 10,
  // bufferMaxEntries: 0,
};

const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'TodoWithBackend';

const dbConnect = () => {
  connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, options, (err) => {
    if (err) return console.log('ВНИМАНИЕ! ОШИБКА БД', err);
    return console.log('База данных успешно подключена! :)');
  });
};

module.exports = { dbConnect };

// require('dotenv').config();
// const { connect, disconnect } = require('mongoose');

// const dbUrl = process.env.DB;
// const options = {
//   useNewUrlParser: true,
//   // useFindAndModify: false,
//   // useCreateIndex: true,
//   useUnifiedTopology: true,
//   // poolSize: 10,
//   // bufferMaxEntries: 0,
// };

// function dbConnect() {
//   connect(dbUrl, options)
//     .then(() => console.log('База данных успешно подключена! :)'))
//     .catch((err) => console.log('ВНИМАНИЕ! ОШИБКА БД', err));
// }

// function dbDisconnect() {
//   disconnect()
//     .then(() => console.log('Отключение базы данных'))
//     .catch((err) => console.log('ОШИБКА ОТКЛЮЧЕНИЯ БД', err));
// }

// module.exports = { dbConnect, dbDisconnect };
