This folder contains self-signed certificates required for express server to run. It is safe :+1: to commit it.

```shell
rm -rf local.twilio.com.crt local.twilio.com.key local.twilio.com.pfx

openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout local.twilio.com.key -out local.twilio.com.crt -config local.twilio.com.conf -passin pass:YourStrongPassword

## Optional
openssl pkcs12 -export -out local.twilio.com.pfx -inkey local.twilio.com.key -in local.twilio.com.crt

docker compose up --detach
```

## Links

- [Docker with SSL and an nginx reverse proxy](https://gist.github.com/dahlsailrunner/679e6dec5fd769f30bce90447ae80081)
