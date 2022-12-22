const express = require("express");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const turnServerTokenRoutes = express.Router();

turnServerTokenRoutes.route("/api/turnServerToken").get(async function(req, res) {
    try {
        const client = require('twilio')(accountSid, authToken);
        const token = await client.tokens.create();
        res.json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'});
    }

});

module.exports = turnServerTokenRoutes;
