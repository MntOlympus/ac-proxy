# What image do you want to start building on?
FROM node

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

RUN npm install
RUN apt-get update && apt-get install -y vim

# What podwill the container talk to the outside world with once created?
EXPOSE 3001

# How do you start your app?
CMD npm start