const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 5500; // Change the port number as needed

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the feedback form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint for form submissions
app.post('/submit-feedback', (req, res) => {
    const feedbackData = req.body;

    // URL provided by Zapier for webhooks
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/19446240/223ut5x/"; // Replace with your Zapier webhook URL

    axios.post(zapierWebhookUrl, feedbackData)
        .then(response => {
            console.log('Data sent to Zapier:', response.data);
            res.status(200).send('Feedback data sent to Zapier');
        })
        .catch(error => {
            console.error('Error sending data to Zapier:', error);
            res.status(500).send('Error sending data to Zapier');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
