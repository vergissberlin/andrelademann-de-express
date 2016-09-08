/**
 * Home controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var express = require('express'),
	router = express.Router();

/**
 * Home controller
 *
 * @module controller/home
 */
module.exports = function (app) {
	app.use('/', router);
};

/**
 * Home controller
 *
 * @function
 */
router.get('/about', function (req, res) {
	res.render('about', {
		title: res.__('About me')
	});
});
