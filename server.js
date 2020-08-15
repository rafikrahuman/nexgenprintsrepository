//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static('./src/nexgenprints'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname,'/src/nexgenprints/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);



//Install express server
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

//app.use(express.static(__dirname, 'dist', {index: false}));

app.use(express.static(__dirname + '/dist/sb-admin-angular'));
server.listen(port, function() {
    console.log("App running on port " + port);
})

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/sb-admin-angular', 'index.html'));
   console.log(path.join(__dirname, 'dist/sb-admin-angular', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/sb-admin-angular', 'index.html'));
    console.log(path.join(__dirname, 'dist/sb-admin-angular', 'index.html'));
});


// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/nexgenprints'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/nexgenprints/index.html'));
// });

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/src'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/src/index.html'));
// });

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8000);