var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
	userEmail = req.body.email;

	User.find({ email: userEmail }, (err, data) => {
		if (err) {
			return res.status(500).json({
				title: 'an error occurred',
				error: err,
			});
		}
		if (data === undefined || data === null || !data || data === '[]' || data.length === 0) {
			let newUser = new User({
				email: req.body.email,
				password: req.body.password,
			});

			newUser.save((err, userCreated) => {
				if (err) {
					return res.status(500).json({
						title: 'An error occurred',
						error: err,
					});
				}
				res.status(201).json({
					message: 'a user was added',
					obj: userCreated,
				});
			});
		} else {
			if (data[0].password === req.body.password) {
        res.status(201).json({
					message: `user : ${data[0].email} was log-in`,
					obj: data,
				});
			}
		}
	});
});
module.exports = router;
