import express from 'express';
import fs from 'fs';
import https from 'https';
import conversations from './conversations/router';

const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
};
const app = express();
const port = 443;

app.get('/', (req, res) => {
    res.send('Twilio Mock API!');
});

app.use('/v1/Conversations', conversations);

const server = https.createServer(options, app)
    .listen(port, () => {
        console.info(`Twilio Mock server is listening on port ${port}`);
    })
    .on('error', (err: Error) => {
        console.error(`Can't start Twilio Mock server on port ${port}`, err);
        throw err;
    });

export default server;
