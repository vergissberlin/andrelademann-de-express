/**
 * Weather controller
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var weather = require('weather-js'),
		express = require('express'),
		router  = express.Router();

/**
 * Weather controller
 *
 * @module controller/weather
 */
module.exports = function (app) {
	app.use('/', router);
};

/**
 * Article controller
 *
 * @function
 */
router.get('/weather', function (req, res) {
	weather.find({search: 'Cape town', degreeType: 'C', lang: 'en-GB'}, function (err, result) {
		var message;
		if (err) {
			console.err(err);
			message = 'Couldn\'t get weather information jet.';
		}
		res.render('weather', {
			title:   'Weather',
			weather: result,
			message:  message
		});
		return undefined;
	});
});
