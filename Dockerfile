FROM node:20-alpine AS react-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM nginx:alpine
COPY --from=react-build /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default/conf
EXPOSE 80