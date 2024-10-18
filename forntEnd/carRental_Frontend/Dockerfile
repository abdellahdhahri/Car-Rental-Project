# Étape 1 : Construire l'application Angular
FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Étape 2 : Servir avec NGINX
FROM nginx:alpine
COPY --from=build /app/dist/votre-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
