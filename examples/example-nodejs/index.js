const http = require('http');
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  // To use service mongo, we added a number of environment variables
// to your application, as listed below:
// MONGO_CONNECTIONSTRING
// MONGO_HOST
// MONGO_PASSWORD
// MONGO_PORT
// MONGO_USERNAME
  response.end("Hello World, I'm Node.js on AKS in WestEurope! here's mongo " + process.env.MONGO_CONNECTIONSTRING);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})
