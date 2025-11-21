const express = require("express");
const app = express();
const connectDB = require("./src/config/db");

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./src/routes/user.routes");
app.use("/api/users", userRoutes);

// connect DB and start Server
const startServer = async () => {
  try {
    await connectDB(); // Connect first
    console.log("MongoDB Connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1); // stop the app if DB fails
  }
};

startServer();
