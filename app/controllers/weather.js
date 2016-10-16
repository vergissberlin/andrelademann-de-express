/**
 * Weather controller
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var bugsnag = require('bugsnag'),
		weather = require('weather-js'),
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
		var flash = '';
		if (err) {
			bugsnag.notify(err);
			console.err(err);
			flash = res.__('Couldn`t get weather information jet.');
		}
		res.render('weather', {
			title:   res.__('Weather'),
			weather: result,
			flash:   flash
		});
	});
});
