const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
require("dotenv").config();
const routes = require("./routes/routes");

app.use(express.json());
const PORT = process.env.PORT || 5100;
app.use(cors());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the routes middleware
app.use("/api", routes);
