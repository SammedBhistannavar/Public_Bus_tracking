const twilio = require('twilio');

// Twilio credentials
const accountSid = 'ACcd73a9a2e6449784d5bcb2ac0464cf76';
const authToken = '[authtoken';

// Create Twilio client
const client = new twilio(accountSid, authToken);

// Function to send SMS
function sendSMS(phoneNumber, message) {
    client.messages.create({
        body: message,
        to: phoneNumber,  // phone number
        from: '+13215947976' //twilio phone number
    })
    .then((message) => console.log(`SMS sent with message ID: ${message.sid}`))
    .catch((error) => console.error(`Error sending SMS: ${error.message}`));
}

// recipient's phone number for they get notify about 
const phoneNumber = '+1234567890'; 
const message = 'Hello from your public transport tracker! Your bus has been delayed.';

sendSMS(phoneNumber, message);
