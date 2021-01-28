FROM mongo:bionic
ENV MONGO_INITDB_ROOT_USERNAME: root
ENV MONGO_INITDB_ROOT_PASSWORD: mypassword
ENV MONGO_INITDB_DATABASE: related
LABEL name="related database"
LABEL version="1.0"
LABEL description="Provides mongo to backend"
COPY ["mongo-init.js", "/docker-entrypoint-initdb.d/"]
EXPOSE 27017
