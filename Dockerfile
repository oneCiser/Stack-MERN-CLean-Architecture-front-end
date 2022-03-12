# pull official base image
FROM node:12.12.0-alpine as build

# set working directory
WORKDIR /frontend



# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

# add app
COPY . ./
# RUN npm run build

# start app
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]