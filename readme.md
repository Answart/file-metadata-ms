<p align="center">
  <img src="https://user-images.githubusercontent.com/4269260/51731243-3e29f680-202f-11e9-9d4b-1a61e0e270f9.png" height="250" width="350">
  <img src="https://user-images.githubusercontent.com/4269260/51730941-3158d300-202e-11e9-958a-7ae1160daee4.png" height="250" width="350">
</p>

# File Metadata Micro-service

An app that, on file upload, returns a JSON response which includes a 'name', 'size', 'date', and 'file'.

```shell
{
  "name": "Screen Shot 2018-02-05 at 5.56.07 PM.png",
  "size": 141907,
  "file": "imgFile-1517888421866.png",
  "date": "2018-02-06T03:40:21.899Z"
}
```

User Stories
------------

- I can submit a FormData object that includes a file upload.
- When I submit something, I will receive the file size in bytes within the JSON response.

Tech Stack and Key Packages
---------------------------

* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for node
* [EJS](https://ejs.co/): Embedded JavaScript templates
* [express-ejs-layouts](https://github.com/Soarez/express-ejs-layouts#readme): Layout support for ejs in express
* [express-session](https://github.com/expressjs/session#readme): Create express session middleware with given options
* [express-flash](https://github.com/RGBboy/express-flash#readme): Rendering flash messages without redirecting the request
* [body-parser](https://github.com/expressjs/body-parser#readme): Node.js body parsing middleware
* [cookie-parser](https://github.com/expressjs/cookie-parser): Parse Cookie header and populate req.cookies with an object keyed by the cookie names
* [mongoose](https://mongoosejs.com/): MongoDB object modeling tool designed to work in an asynchronous environment.
* [connect-mongo](https://github.com/jdesboeufs/connect-mongo#readme): MongoDB session store for Connect and Express
* [multer](https://github.com/expressjs/multer#readme): Node.js middleware for handling multipart/form-data, which is primarily used for uploading files
* [dotenv](https://github.com/motdotla/dotenv#readme): Load environment variables from .env file

Getting Started
---------------

Create your own server. I used mLab.com.
Create a user on that server.

Create your own .env file in the root directory with a DB_URI which links to your server. Here is an example:
```shell
PORT=8000
HOST=127.0.0.1
DB_URI=mongodb://<dbuser>:<dbpassword>@ds125588.mlab.com:25588/answart-file-metadata-ms
DB_USER=<dbuser>
DB_USER_PASS=<dbpassword>
SECRET=my-super-secret
```

Install dependencies then launch app @ [localhost:8000](http://localhost:8000).
```shell
$ npm install
$ npm start
```

NPM Commands
------------

| Command | Description |
| ------- | ----------- |
| npm install | Install dependencies in package.json |
| npm start | Start server @ **localhost:8000** |
