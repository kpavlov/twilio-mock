import {Twilio} from 'twilio';

const accountSid = 'AC00000000000000000000000000000000'; // Your Account SID from www.twilio.com/console
const authToken = 'xxxxxx';   // Your Auth Token from www.twilio.com/console

const client = new Twilio(accountSid, authToken, {
    region: 'local',
    logLevel: 'info'
});
const conversationsClient = client.conversations;

describe('Conversations API tests', () => {

    test('Should create conversation', async () => {
        const result = await conversationsClient.conversations.create();
        console.log('Created Conversation:', result);
    });

    test('Should get one conversation', async () => {
        const result = await conversationsClient.conversations.get('CH00000000000000000000000000000001').fetch();
        expect(result.sid).toEqual('CH00000000000000000000000000000001');
        console.debug('Received Conversation:', result);
    });
});



