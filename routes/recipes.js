var express = require('express');
var router = express.Router();
var Recipes = require('../models/recipesModel');
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', (req, res, next) => {
	console.log('inside');
	Recipes.find({}, (err, data) => {
		if (err) {
			return res.status(500).json({
				title: 'an error occurred',
				error: err,
			});
		}
		res.status(200).json({
			message: 'Got All recipes',
			obj: data,
		});
	});
});

router.post('/', (req, res, next) => {
	//  console.log(req.body)
	const recipe = new Recipes({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
	});
	console.log('recipe', recipe);

	recipe.save((err, data) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}

		res.status(201).json({
			message: 'a recipe was added',
			obj: data,
		});
	});
});

router.post('/login', (req, res, next) => {
	console.log('in');
});

module.exports = router;
