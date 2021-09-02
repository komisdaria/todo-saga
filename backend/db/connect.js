const mongoose = require('mongoose');


const dbUrl = 'mongodb+srv://User1:fktrctq95@cluster0.tnp6y.mongodb.net/Todov4?retryWrites=true&w=majority';

const options =
{
    useUnifiedTopology: true,
    useNewUrlParser: true
};



function connect() {
  mongoose.connect(dbUrl, options)
  .then(() => console.log('MONGODB CONNECTED...'))
  .catch((err) => console.log('>>>>>', err));
}


module.exports = { connect };

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
