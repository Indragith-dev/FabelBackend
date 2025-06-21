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
  const { name, email, phone, message, isFabel } = req.body;

  // Validate input
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const companyName = isFabel ? 'Fabel' : 'Cescift';
  const recipientEmail = isFabel ? process.env.FABEL_EMAIL : process.env.CESCIFT_EMAIL;

  if (!recipientEmail) {
    return res.status(500).json({ message: 'Recipient email not configured' });
  }

  try {
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    const sendSmtpEmail = {
      sender: { name: companyName, email: process.env.SENDER_EMAIL },
      to: [{ email: recipientEmail, name: companyName }],
      subject: `New Enquiry from ${name} - ${companyName}`,
      htmlContent: `
        <h2>${companyName} - New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
      replyTo: { email }
    };

    await client.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      message: error?.response?.body?.message || 'Failed to send email. Please try again.'
    });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
