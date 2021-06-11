const ProductCategory=require('../models/ProductCategory')
 
const ErrorResponse = require('../utils/errorResponse');   

const asyncHandler=require('../midelware/async')

   //@desc     create  Product Category
    //@route    Post /api/v1/productcategory
    //@access   private


    exports.createProductCategory =asyncHandler( async (req, res, next) =>
    {
        try {
            const category = await ProductCategory.create(req.body);
            res.status(200).json({
				success: true,
				msg: ` new category created`,
				data: category,
			});

        } catch (err) {
            next(err)
        }
        



        
    })







    //@desc     Get All  Product Category
    //@route    get /api/v1/productcategory
    //@access   private,puplic
exports.getAllProductCategory =asyncHandler( async (req, res, next) =>
{
    
            
            const allCategory = await ProductCategory.find().populate('subCategory');
     
            res.status(200).json({
				count: allCategory.length,
				success: true,
				msg: 'show all product category',
				data: allCategory,
			});

     
    });




    //@desc     Get Single  Product Category
    //@route    get /api/v1/productcategory/:id
    //@access   private,puplic
exports.getSingleProductCategory =asyncHandler( async (req, res, next) =>
    
{
    try {
        const category = await ProductCategory.findById(req.params.id)
        if (!category) {
            return next(new ErrorResponse(`product category with id ${req.params.id} is not found`, 404));

        }
        
        res.status(200).json({
            success: true,
            msg: `show  product category with id ${req.params.id}`,
            data:category
        });
    } catch (err) {
       
        next(err);
    }
        
    });



    //@desc     update Product Category
    //@route    put /api/v1/productcategory/:id
    //@access   private
exports.updateProductCategory =asyncHandler( async (req, res, next) =>
    
{

    try {
        const category = await ProductCategory.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!category) {
			 return next(new ErrorResponse(`product category with id ${req.params.id} is not found`, 404));

		}
        res.status(200).json({
			success: true,
			msg: `category with id ${req.params.id} is updated `,
			data: category,
		});
    } catch (err) {
   
          next(err)
    }
    

    });


    //@desc     delete Product Category
    //@route    delete /api/v1/productcategory/:id
    //@access   private
    exports.deleteProductCategory = asyncHandler( async (req, res, next) =>
    {
            try {
				const category = await ProductCategory.findById(req.params.id);
				if (!category) {
					return next(new ErrorResponse(`product category with id ${req.params.id} is not found`, 404));

                }
                category.remove()
				res.status(200).json({
					success: true,
					msg: `category with id ${req.params.id} is Deleted `,
					
				});
			} catch (err) {
			 next(err)
			}

            

    });