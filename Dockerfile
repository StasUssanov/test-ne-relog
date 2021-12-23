FROM node:16.12-alpine as builder
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app
RUN yarn run build

FROM nginx:1.21.3-alpine
COPY --from=builder /app/build /var/www
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
