# Twilio Mock API Server

Twilio API Simulator

## Setup

Define host name for `local` Twilio region

```shell
echo '127.0.0.1 api.local.twilio.com' | sudo tee -a /etc/hosts
echo '127.0.0.1 conversations.local.twilio.com' | sudo tee -a /etc/hosts
echo '127.0.0.1 tsock.local.twilio.com' | sudo tee -a /etc/hosts
```

[SSL:](https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28)

```shell

openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 36525
openssl rsa -in keytmp.pem -out key.pem
```

Start server

```javascript
const server = require('twilio-mock');
```
