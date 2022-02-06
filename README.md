# Twilio Mock API Server

[![Node.js CI](https://github.com/kpavlov/twilio-mock/actions/workflows/node.js.yml/badge.svg)](https://github.com/kpavlov/twilio-mock/actions/workflows/node.js.yml)

Twilio API Simulator

## Setup

Define host name for `local` Twilio region. Your server will be running on `localhost:443` with self-signed TLS
certificate.

```shell
echo '127.0.0.1 api.local.twilio.com' | sudo tee -a /etc/hosts
echo '127.0.0.1 conversations.local.twilio.com' | sudo tee -a /etc/hosts
echo '127.0.0.1 tsock.local.twilio.com' | sudo tee -a /etc/hosts
```

_.env_ file:

```dotenv .env
NODE_TLS_REJECT_UNAUTHORIZED=0 # Allow self-signed certificates
```

Running server:

```shell
yarn && yarn start
```

Calling API:

```typescript
// sample.ts
import {Twilio} from "twilio";
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Twilio Credentials
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const accountSid = 'AC00000000000000000000000000000000'; // Your Account SID from www.twilio.com/console
const authToken = 'xxxxxx';   // Your Auth Token from www.twilio.com/console

const client = new Twilio(accountSid, authToken, {
    region: 'local', // will connect to '*.local.twilio.com' === 127.0.0.1
    logLevel: 'info' // or 'debug' 
})
const conversationsClient = client.conversations;

// Use Twilio API as usual
const result = await conversationsClient.conversations.create()
console.log('Created Conversation:', result)
```

Twilio client will get a dummy response from the mock server. This is the sample output:

```log
Created Conversation: {
  accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  chatServiceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  messagingServiceSid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  sid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  friendlyName: 'Friendly Conversation',
  uniqueName: 'unique_name',
  attributes: { topic: 'feedback' },
  state: 'inactive',
  dateCreated: 2015-12-16T22:18:37.000Z,
  dateUpdated: 2015-12-16T22:18:38.000Z,
  timers: {
    date_inactive: '2015-12-16T22:19:38Z',
    date_closed: '2015-12-16T22:28:38Z'
  },
  url: 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  links: {
    participants: 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Participants',
    messages: 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages',
    webhooks: 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Webhooks'
  },
  bindings: {}
}
```

**Note:**
Configuring [SSL](https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28):

```shell
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 36525
openssl rsa -in keytmp.pem -out key.pem
```
