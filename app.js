require('dotenv').config();
const colors = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8087;

//routes
const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', productRoutes);

app.get('/', (req, res) => {
	return res.json({
		status: 1,
		message: 'Welcome to the API',
	});
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`.green);
});
