FROM nginx:latest

EXPOSE 443/tcp

COPY local.twilio.com.crt /etc/ssl/certs/
COPY local.twilio.com.key /etc/ssl/private/
COPY nginx.conf /etc/nginx/nginx.conf
