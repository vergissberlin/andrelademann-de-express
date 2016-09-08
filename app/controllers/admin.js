/**
 * Admin controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var express      = require('express'),
		passportUtil = require('../../util/passport'),
		router       = express.Router();

module.exports = function (app) {
	app.use('/', router);
};

router.get('/admin', passportUtil.ensureAuthenicated, function (req, res) {
	res.render('admin', {
		title: res.__('Admin page')
	});
});
