var weather = require('weather-js'),
	express = require('express'),
	router = express.Router();

module.exports = function (app) {
	app.use('/', router);
};

router.get('/weather', function (req, res) {

	weather.find({search: 'Cape town', degreeType: 'C', lang: 'de-DE'}, function (err, result) {
		if (err) {
			console.log(err);
		}
		res.render('weather', {
			title: 'Weather',
			weather: result
		});
	});
});

