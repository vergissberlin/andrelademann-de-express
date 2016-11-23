/**
 * Form controller
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

router.get('/form', function (req, res) {
	res.render('form', {
		title: res.__('Upload formular')
	});
});
