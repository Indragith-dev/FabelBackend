const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SibApiV3Sdk = require('@sendinblue/client');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
  brevo.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

  try {
    await brevo.sendTransacEmail({
      sender: { email: email, name: name },
      to: [{ email: process.env.CLIENT_EMAIL }],
      subject: 'New Enquiry Form Submission',
      htmlContent:  `
      <h3>New Enquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
    });
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
