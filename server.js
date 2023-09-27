const express = require('express');
const cors = require('cors');
const env = require('dotenv');

const app = express();

global.__dirname = __dirname;

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions));

app.use(express.json);

app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

async function testConnection() {
  try {
    await db.sequelize.authenticate();

    await db.sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error.message);
  }
}

testConnection();

app.get('/', (req, res) => {
  res.json({ message: "DIDACTI-K" });
});

// require('./app/routes/auth.routes')(app);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});