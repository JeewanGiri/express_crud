const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/express_crud");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

module.exports = connectDB;
// docker compose up -d
// docker compose down
// docker ps
// docker logs mongo -f --tail 20
