require("custom-env").env("staging");

const mongoose = require("mongoose");

const dbConfig = process.env.DB_HOST;

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.export = connection;
