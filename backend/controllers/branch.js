const Branch = require('../models/Branch');

const ErrorResponse = require('../utils/errorResponse');

const asyncHandler = require('../midelware/async');

//@desc     create  branch
//@route    Post /api/v1/productcategory
//@access   private

exports.createBranch = asyncHandler(async (req, res, next) => {
	try {
		const branch = await Branch.create(req.body);
		res.status(200).json({
			success: true,
			msg: ` new category created`,
			data: branch,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     Get All  Product Category
//@route    get /api/v1/productcategory
//@access   private,puplic
exports.getAllBranches = asyncHandler(async (req, res, next) => {
	const allBranches = await Branch.find();

	res.status(200).json({
		count: allBranches.length,
		success: true,
		msg: 'show all Branches',
		data: allBranches,
	});
});

//@desc     Get Single  Product Category
//@route    get /api/v1/productcategory/:id
//@access   private,puplic
exports.getSingleBranch = asyncHandler(async (req, res, next) => {
	try {
		const branch = await Branch.findById(req.params.id);
		if (!branch) {
			return next(new ErrorResponse(`branch with id ${req.params.id} is not found`, 404));
		}

		res.status(200).json({
			success: true,
			msg: `show  product category with id ${req.params.id}`,
			data: branch,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     update Product Category
//@route    put /api/v1/productcategory/:id
//@access   private
exports.updateBranch = asyncHandler(async (req, res, next) => {
	try {
		const branch = await Branch.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!branch) {
			return next(new ErrorResponse(`product category with id ${req.params.id} is not found`, 404));
		}
		res.status(200).json({
			success: true,
			msg: `Branch with id ${req.params.id} is updated `,
			data: branch,
		});
	} catch (err) {
		next(err);
	}
});

//@desc     delete Product Category
//@route    delete /api/v1/productcategory/:id
//@access   private
exports.deleteBranch = asyncHandler(async (req, res, next) => {
	try {
		const branch = await Branch.findByIdAndDelete(req.params.id);
		if (!branch) {
			return next(new ErrorResponse(`branch with id ${req.params.id} is not found`, 404));
		}
		res.status(200).json({
			success: true,
			msg: `category with id ${req.params.id} is Deleted `,
		});
	} catch (err) {
		next(err);
	}
});
