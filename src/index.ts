import express from 'express';
import dotenv from 'dotenv';
import https from 'https'
import fs from 'fs'
import conversations from './conversations/router';

dotenv.config()

const app = express();

const port = process.env.PORT;
const tls = process.env.TLS_ENABLED;

app.get('/', (req, res) => {
    res.send('Twilio Mock API!');
});

app.use('/v1/Conversations', conversations);

let server;
if (tls === 'true') {
    const options = {
        key: fs.readFileSync('./nginx/local.twilio.com.key'),
        cert: fs.readFileSync('./nginx/local.twilio.com.crt'),
    };
    server = https.createServer(options, app)
        .listen(port, () => {
            console.info(`Secure Twilio Mock server is listening on port ${port}`);
        })
} else {
    server = app.listen(port, () => {
        console.info(`Twilio Mock server is listening on port ${port}`);
    })
}

server.on('error', (err: Error) => {
    console.error(`Can't start Twilio Mock server on port ${port}`, err);
    throw err;
});

export default server;
