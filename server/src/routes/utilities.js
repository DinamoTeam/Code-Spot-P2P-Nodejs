const express = require("express");
const { google } = require('googleapis');
const nodemailer = require("nodemailer");
 
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: GMAIL_REFRESH_TOKEN});

const utilityRoutes = express.Router();

utilityRoutes.route("/api/Utilities/SendEmail").post(async function (req, res) {
  let emailBody = "";
  emailBody += `<p>Name: ${req.body.name}</p>`;
  emailBody += `<p>Email: ${req.body.email}</p>`;
  emailBody += `<p>Subject: ${req.body.subject}</p>`;
  emailBody += `<p>Message: </p>`;
  emailBody += `<p>${req.body.message}</p>`;
    
  try {
    await sendEmail(emailBody);    
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Failed to send email'});
  }

  res.json({ response: "Email sent sucessful!" });
});

utilityRoutes.route("/api/Utilities/SendFeedbackForm").post(async function (req, res) {
  let emailBody = "";
  emailBody += "<p>Your overall satisfaction of the app: " + req.body.satisfactionLevel + "</p>";
  emailBody += "<p>How satisfied are you with the ability to collaborate with others using this app? " + req.body.collabLevel + "</p>";
  emailBody += "<p>What do you like most about the app? " + req.body.didWell + "</p>";
  emailBody += "<p>Which of the issues below was the biggest problem during your experience? " + req.body.issue + "</p>";
  emailBody += "<p>Please describe the problem you encountered in more detail: " + req.body.issueDetails + "</p>";
  emailBody += "<p>Do you have any suggestions for improvement? " + req.body.improvement + "</p>";
  
  try {
    await sendEmail(emailBody);    
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Failed to send email'});
  }

  res.json({ response: "Email sent sucessful!" });
});

async function sendEmail(emailBody) {
  const accessToken = await oAuth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'dinamoteam01@gmail.com',
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  const mailOptions = {
    from: 'dinamoteam01@gmail.com',
    to: 'gtt27@drexel.edu, amt23@sfu.ca',
    subject: 'Message from Code Spot',
    html: emailBody
  };

  let info = await transport.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
}

module.exports = utilityRoutes;
