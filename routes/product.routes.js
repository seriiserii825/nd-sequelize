const express = require('express');
const router = express.Router();
const Product = require('../models').Product;

router.get('/products', (req, res) => {
	Product.findAll()
		.then((data) => {
			return res.json({
				status: 1,
				message: 'Success',
				data,
			});
		})
		.catch((error) => {
			console.log(error, 'error');
		});
});

module.exports = router;