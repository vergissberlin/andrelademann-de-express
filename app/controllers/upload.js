/**
 * Upload controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */

var express          = require('express'),
		multer           = require('multer'),
		multerStorageS3  = require('multer-storage-s3'),
		router           = express.Router(),
		storage          = multerStorageS3({
			destination: function (req, file, cb) {
				cb(null, 'uploads');
			},
			filename:    function (req, file, cb) {
				cb(null, file.originalname);
			}
		}),
		uploadMiddleware = multer({storage: storage});

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
router.post('/upload', uploadMiddleware.single('sampleFile'), function (req, res) {
	res.redirect('/upload');
});
