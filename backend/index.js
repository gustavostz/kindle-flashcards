const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

app.post('/append/:fileName', (req, res) => {
    const { text } = req.body;
    const { fileName } = req.params;
    const filePath = `./${fileName}.txt`; // File path based on parameter

    // Append text to the file, creating the file if it doesn't exist
    fs.appendFile(filePath, text + '\n', (err) => {
        if (err) {
            console.error('Failed to append text:', err);
            return res.status(500).send('Error appending text');
        }
        res.send('Text appended successfully');
    });
});

app.get('/download/:fileName', (req, res) => {
    const { fileName } = req.params; // Get the file name from route parameters
    const filePath = `./${fileName}.txt`; // Your file path based on route parameter
    res.download(filePath, (err) => {
        if (err) {
            console.error('Failed to download file:', err);
            // Handle file not found separately to give a more specific error message
            if (err.code === 'ENOENT') {
                return res.status(404).send('File not found');
            }
            return res.status(500).send('Error downloading file');
        }
    });
});
