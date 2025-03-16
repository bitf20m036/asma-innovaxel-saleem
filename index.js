const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests
const PORT = 5001;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected"),
);

// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve frontend files

app.use("/shorten", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
