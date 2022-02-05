import https from 'https'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config() // This is needed in order to read .env file before tests

axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

// noinspection JSUnusedGlobalSymbols
export default async () => {
    console.log('Starting Server...')
    const server = require('../src/index')
    console.log('Ready to run tests')
    return server
};
