/**
 * Upload controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */

var express = require('express'),
		multer  = require('multer'),
		router  = express.Router();

var upload = multer({
	dest: 'public/uploads/'
});


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
router.get('/upload', function (req, res) {
	res.render('upload', {
		title: res.__('Upload')
	});
});


/**
 * Home controller
 *
 * @function
 */
router.post('/upload', upload.single('sampleFile'), function (req, res) {
	console.log(req.file);
	// req.file is the `avatar` file
	// req.body will hold the text fields, if there were any
	res.redirect('/upload');
});

