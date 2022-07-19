const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const Student = require('../models').Student;

router.post('/register', (req, res) => {
	const { name, email, password } = req.body;
	Student.findOne({
		where: {
			email: {
				[Op.eq]: email,
			},
		},
	}).then((student) => {
		if (student) {
			return res.json({
				status: 0,
				message: 'Email already exists',
			});
		} else {
			Student.create({
				name,
				email,
				password: bcrypt.hashSync(password, 10),
			})
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
		}
	});
});

module.exports = router;