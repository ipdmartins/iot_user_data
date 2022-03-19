# From is the key word that will import the image. Which is node in this case
FROM node
# will create a directory to save all information related
WORKDIR /user/app

COPY package.json ./
# not all images come with yarn installed, so it's safer to use npm
RUN npm install
# this command will copy everything installed and downloaded to the root directory
COPY . .
# this will throw the project to the port that I'm currently using
EXPOSE 3333
# this will run the commands that I have setted
CMD ["npm","run","dev"]
