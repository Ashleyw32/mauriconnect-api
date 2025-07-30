require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const bookingRoutes = require("./routes/booking");

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Connect to SQL Server

app.use("/api", bookingRoutes);
app.get("/", function (req, res) {
  res.send("Express is working on IISNode!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
