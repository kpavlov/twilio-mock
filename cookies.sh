yarn
yarn build

#docker build nginx -t twilio-proxy:latest
#docker rm  --force  twilio-proxy
#docker run -p 127.0.0.1:443:443 -d --rm --name twilio-proxy twilio-proxy:latest

yarn proxy
nohup yarn start:prod &
sleep 1

yarn test
yarn proxy:stop
killall node
