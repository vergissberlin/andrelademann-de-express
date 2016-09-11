/**
 * Article Model
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var mongoose = require('mongoose'),
		Schema   = mongoose.Schema;

var ArticleSchema = new Schema({
		state:    String,
		title:    {
			type:     String,
			index:    true,
			required: true
		},
		slug:     {
			type:     String,
			index:    true,
			unique:   true,
			required: true
		},
		meta:     {
			index:       Boolean,
			description: String,
			keywords:    String
		},
		image:    String,
		teaser:   String,
		text:     String,
		comments: []
	},
	{
		timestamps: true
	}
);

mongoose.model('Article', ArticleSchema);
