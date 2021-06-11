const mongoose = require('mongoose')
const { transliterate, slugify } = require('transliteration')
const { ObjectId } = mongoose.Schema
const productSubSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'please add an category name'],
			minlength: [3, 'too short'],
			maxlength: [100, 'Too Long'],
			unique: true,
		},
		description: {
			type: String,
			trim: true,
			required: [true, 'please add  category description'],
			minlength: [3, 'too short'],
			maxlength: [100, 'Too Long'],
		},
		slug: {
			type: String,
			lowercase: true,
			index: true,
			unique: true,
		},
		parent: {
			type: ObjectId,
			ref: 'ProductCategory',
			required: true,
			
		},
	},
	{ timestamps: true },
)

productSubSchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true })
	this.tr = transliterate(this.name)
	next()
})



module.exports = mongoose.model('ProductSub', productSubSchema)
