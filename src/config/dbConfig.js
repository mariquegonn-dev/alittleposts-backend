const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://mariquegonn:1212@cluster0.qvhmh0o.mongodb.net/anotacoes?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.export = connection;
