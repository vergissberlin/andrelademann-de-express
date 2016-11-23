/**
 * Video controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var
	express = require('express'),
	router  = express.Router();

module.exports = function (app) {
	app.use('/', router);
};

router.get('/video', function (req, res) {
	res.render('video', {
		title: res.__('Video')
	});
});
