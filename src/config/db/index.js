const mongoose = require("mongoose");

const url = "mongodb+srv://client:xinchaoclient@cluster0.pjbgc.mongodb.net/avenger_website?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url,{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Succesfully connect");
  } catch (error) {
    console.log("Fail to connect to MongoDB");
  }
}


module.exports = { connect };
