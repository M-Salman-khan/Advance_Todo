const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("Connection Successfully"))
    .catch((err) =>
      console.log("Error occured while connecting to the Database", err)
    );
}

module.exports = connectToMongoDB;
