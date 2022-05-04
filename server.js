// Creates an Express application
const express = require('express');
const app = express();

const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
// Sets port for listening
const PORT = process.env.port || 3001;


// Middleware
app.use(express.static('public'));


app.use(express.json()); // json

app.use(webRouter);
app.use(apiRouter);





// Listen to the port when deployed
app.listen(PORT, function() {
    
    console.log(`App is running on http://localhost:${PORT}`);
});
