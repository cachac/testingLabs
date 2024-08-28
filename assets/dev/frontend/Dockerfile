FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /usr/src/app

COPY index.html .
COPY favicon.ico .
COPY get-container-id.sh .
RUN chmod +x get-container-id.sh

EXPOSE 8080

CMD ["/bin/sh", "-c", "./get-container-id.sh && http-server -p 8080"]

# docker build -t cachac/demo-frontend:1 .
# docker push cachac/demo-frontend:1
