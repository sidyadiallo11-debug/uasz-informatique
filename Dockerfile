# On part d'une image officielle Nginx (serveur web leger)
FROM nginx:alpine

# On copie tout notre site dans le bon dossier de Nginx
COPY html/ /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/

# Notre site sera disponible sur le port 80
EXPOSE 80

# Demarre le serveur web
CMD ["nginx", "-g", "daemon off;"]
