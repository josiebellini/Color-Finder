var path = require('path');

var colors = require('../data/colors.js');

module.exports = function(app) {
	app.get('/colors', function(req, res) {
		res.json(colors);
	});

	app.post('/colors', function(req, res) {
		var userInput = req.body;

		var userResponses = '';
		var matchName = '';
		var matchPhoto = '';
		var totalDifference = ''; 

		// I could not figure out the logic of the for loops needed here
				matchName = colors[i].name;
				matchImage = colors[i].photo;
			}
		}

	});
};