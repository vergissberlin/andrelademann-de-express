/**
 * Upload controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */

var express          = require('express'),
		getSlug          = require('speakingurl'),
		mime             = require('mime'),
		multer           = require('multer'),
		multerStorageS3  = require('multer-storage-s3'),
		router           = express.Router(),
		storage          = multerStorageS3({
			destination: function (req, file, cb) {
				cb(null, 'uploads');
			},
			filename:    function (req, file, cb) {
				cb(
					null,
					getSlug(
						req.body.name,
						{
							lang:     'de',
							truncate: 80
						}) + '.' + mime.extension(file.mimetype)
				);
			}
		}),
		uploadMiddleware = multer({storage: storage});

require('string.prototype.startswith');
/**
 * Home controller
 *
 * @module controller/home
 */
module.exports = function (app) {
	app.use('/', router);
};

/**
 * Upload controller
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
router.post('/upload', uploadMiddleware.single('file'), function (req, res) {
	if (!req.file.mimetype.startsWith('image/')) {
		return res.status(422).json({
			error: 'The uploaded file must be an image'
		});
	}
	return res.status(200).send(req.file);
});
