const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://khushi:khushi@cluster0-shard-00-00.zymki.mongodb.net:27017,cluster0-shard-00-01.zymki.mongodb.net:27017,cluster0-shard-00-02.zymki.mongodb.net:27017/socialmediaapp?ssl=true&replicaSet=atlas-2zjo8q-shard-0&authSource=admin&retryWrites=true&w=majority");
};
