const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or use 'smtp.yourprovider.com'
  auth: {
    user: "your.email@gmail.com",
    pass: "your_app_password", // NOT your regular password — use App Password or OAuth
  },
});

// Email options
const mailOptions = {
  from: "your.email@gmail.com",
  to: "recipient@example.com",
  subject: "Hello from Node.js!",
  text: "This is a test email sent using Node.js and Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("❌ Error:", error);
  }
  console.log("✅ Email sent:", info.response);
});
