require("dotenv").config();
const sql = require("mssql");

const dbConfig = {
  user: "wbpoc",
  password: "sql@tfs2008",
  server: "102.222.106.122",
  database: "CarBooking",
  options: {
    encrypt: true, // Required for Azure SQL
    trustServerCertificate: true, // Required for local development
  },
};

async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log("✅ Connected to SQL Server");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
}

module.exports = { connectDB, sql };
