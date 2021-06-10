const mongoose = require('mongoose');
const { transliterate, slugify } = require('transliteration');

const productCategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'please add  category name'],
			minlength: [3, 'too short'],
			maxlength: [100, 'Too Long'],
			unique: true,
		},
		description: {
			type: String,
			trim: true,
			required: [true, 'please add  category description'],
			minlength: [3, 'too short'],
			maxlength: [500, 'Too Long'],
		},
		slug: {
			type: String,
			index: true,
        },
     
	},
	{ timestamps: true }
);



module.exports = mongoose.model('ProductCategory', productCategorySchema);
