# pull official base image
FROM node:latest  as build

# set working directory
WORKDIR /frontend



# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent
RUN npm i typescript @typescript-eslint/parser --silent
RUN npm i @typescript-eslint/eslint-plugin

# add app
COPY . ./
RUN npm run build --prod

# start app
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]