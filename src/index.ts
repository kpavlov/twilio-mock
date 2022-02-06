import express from 'express';
import http from 'http';
import conversations from './conversations/router';

const app = express();

const port = 8343;

app.get('/', (req, res) => {
    res.send('Twilio Mock API!');
});

app.use('/v1/Conversations', conversations);

const server = http.createServer(app)
    .listen(port, () => {
        console.info(`Twilio Mock server is listening on port ${port}`);
    })
    .on('error', (err: Error) => {
        console.error(`Can't start Twilio Mock server on port ${port}`, err);
        throw err;
    });

export default server;
