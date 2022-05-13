const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');


app.use(express.json());


// import routes
const productRoute = require('./routes/product.route');

app.use('/api/v1',productRoute);

// middleware for error
app.use(errorMiddleware);





module.exports  = app;