const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Clean connection string without the old options
    await mongoose.connect('mongodb+srv://princebolba:G14s6JoKp2ShSxzX@cluster0.7b4kg7k.mongodb.net/Gramora?appName=Cluster0');
    console.log("Gramora Database Connected Successfully!");
  } catch (error) {
    console.error("Database Connection Error: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;