import dotenv from 'dotenv'

dotenv.config() // This is needed in order to read .env file before tests

// noinspection JSUnusedGlobalSymbols
export default async () => {
    console.log('Ready to run tests')
};
