/**
 * Passport configuration
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
exports.ensureAuthenicated = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	else {
		req.session.returnTo = req.url;
		res.redirect('/user/login');
	}
	return next();
};
