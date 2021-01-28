FROM node
LABEL name="q-and-a-backend"
LABEL version="1.0"
LABEL description="Provides node server for fec module: q-and-a"
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["backend", "backend"]
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "backend", "./"]
RUN npm install
EXPOSE 3004
CMD npm start
