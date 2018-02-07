# file-metadata-ms

## File Metadata Microservice

An app that, on file upload, returns a JSON response which includes a 'name', 'size', 'date', and 'file'.

## User Stories

- I can submit a FormData object that includes a file upload.
- When I submit something, I will receive the file size in bytes within the JSON response.

## Install

### Production

```
https://answart-file-metadata-ms.herokuapp.com
```

### Local

Create your own server. I used mLab.com.
Create a user on that server.

Create your own .env file in the root directory with a DB_URI which links to your server. Here is an example:
```
PORT=8000
HOST=127.0.0.1
DB_URI=mongodb://<dbuser>:<dbpassword>@ds125588.mlab.com:25588/answart-file-metadata-ms
DB_USER=<dbuser>
DB_USER_PASS=<dbpassword>
SECRET=my-super-secret
```

```
npm install
node server.js
```

```
http://localhost:8000
```

## Output

```
{
  "name": "Screen Shot 2018-02-05 at 5.56.07 PM.png",
  "size": 141907,
  "file": "imgFile-1517888421866.png",
  "date": "2018-02-06T03:40:21.899Z"
}
```
