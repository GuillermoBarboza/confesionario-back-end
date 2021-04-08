const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(process.env.CONNECTION_STRING);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", (e) =>
  console.log("¡Conexión con la base de datos establecida!")
);

module.exports = mongoose;
