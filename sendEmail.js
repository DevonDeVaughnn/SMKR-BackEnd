require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ssmkr420@gmail.com",
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  from: "ssmkr420@gmail.com",
  to: "",
  subject: "Testing and testing",
  text: "Hi Im high",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Email sent!!");
  }
});
