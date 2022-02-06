import dotenv from 'dotenv'

dotenv.config() // This is needed in order to read .env file before tests

// noinspection JSUnusedGlobalSymbols
export default async () => {
    if (process.env.TLS_ENABLED === 'true') {
        console.log('Running tests with secure server')
        const server = await require('../src/index')
    }

    console.log('Ready to run tests')
};
