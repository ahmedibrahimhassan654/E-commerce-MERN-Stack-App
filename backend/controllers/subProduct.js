const SubProduct = require('../models/ProductSub');

const ErrorResponse = require('../utils/errorResponse');

const asyncHandler = require('../midelware/async');

//@desc     create  Product sub-Category
//@route    Post /api/v1/sub
//@access   private

exports.createSub = asyncHandler(async (req, res, next) => {
	try {
		const sub = await SubProduct.create(req.body);
		res.status(200).json({
			success: true,
			msg: ` new Sub created`,
			data: sub,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     Get All  Product sub-Category
//@route    get /api/v1/sub
//@route    get /api/v1/productcategory/:productcategoryId/sub
//@access   private,puplic
exports.getAllSub = asyncHandler(async (req, res, next) =>
{
    let query
    if (req.params.productcategoryId) {
        query = SubProduct.find({ parent: req.params.productcategoryId });
    } else {
        query = SubProduct.find().populate({
			path: 'parent',
			select: 'name description',
		});
    }


const allSubCategory=await query
	

	res.status(200).json({
		count: allSubCategory.length,
		success: true,
		msg: 'show all product Subcategory',
		data: allSubCategory,
	});
});

//@desc     Get Single  Product Category
//@route    get /api/v1/productcategory/:id
//@access   private,puplic
exports.getSingleSub = asyncHandler(async (req, res, next) => {
	try {
		const sub = await SubProduct.findById(req.params.id);
		if (!sub) {
			return next(new ErrorResponse(`product sub-category with id ${req.params.id} is not found`, 404));
		}

		res.status(200).json({
			success: true,
			msg: `show  product Sub-category with id ${req.params.id}`,
			data: sub,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     update Product Category
//@route    put /api/v1/productcategory/:id
//@access   private
exports.updateSub = asyncHandler(async (req, res, next) => {
	try {
		const Sub = await SubProduct.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!Sub) {
			return next(new ErrorResponse(`product Sub-category with id ${req.params.id} is not found`, 404));
		}
		res.status(200).json({
			success: true,
			msg: `Sub-category with id ${req.params.id} is updated `,
			data: Sub,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     delete Product Category
//@route    delete /api/v1/productcategory/:id
//@access   private
exports.deleteSub = asyncHandler(async (req, res, next) => {
	try {
		const sub = await SubProduct.findByIdAndDelete(req.params.id);
		if (!sub) {
			return next(new ErrorResponse(`product category with id ${req.params.id} is not found`, 404));
		}
		res.status(200).json({
			success: true,
			msg: `Sub-category with id ${req.params.id} is Deleted `,
		});
	} catch (err) {
		next(err);
	}
});
