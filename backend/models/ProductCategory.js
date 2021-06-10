const mongoose = require('mongoose');
 const { transliterate, slugify } = require('transliteration');
//const slugify= require('slugify')
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

//create category slug from name 
productCategorySchema.pre('save',function (next) {
	this.slug=slugify(this.name,{lower:true})
	next()
})





module.exports = mongoose.model('ProductCategory', productCategorySchema);
