import Express from 'express';

var apiApp = Express();
var API_PORT = 8080;

apiApp.get('/api')

apiApp.listen(API_PORT || 8080,()=> console.log("ApiAPP Listening on port 8080"));
