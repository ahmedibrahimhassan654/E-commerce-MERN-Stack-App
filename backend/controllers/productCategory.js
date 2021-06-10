const ProductCategory=require('../models/ProductCategory')
   
   
   //@desc     create  Product Category
    //@route    Post /api/v1/productcategory
    //@access   private


    exports.createProductCategory =async (req, res, next) =>
    {
        try {
            const category = await ProductCategory.create(req.body);
            res.status(200).json({
				success: true,
				msg: ` new category created`,
				data: category,
			});

        } catch (err) {
            res.status(400).json({
                success: false
                
            })
        }
        



        
    }







    //@desc     Get All  Product Category
    //@route    get /api/v1/productcategory
    //@access   private,puplic
exports.getAllProductCategory = async (req, res, next) =>
{
        try {
            
            const allCategory = await ProductCategory.find()
     
            res.status(200).json({
				count: allCategory.length,
				success: true,
				msg: 'show all product category',
				data: allCategory,
			});

        } catch (err) {
            res.staus(400).json(
                {
                    success: false,
                }
            )
        }
    };




    //@desc     Get Single  Product Category
    //@route    get /api/v1/productcategory/:id
    //@access   private,puplic
exports.getSingleProductCategory = async (req, res, next) =>
    
{
    try {
        const category = await ProductCategory.findById(req.params.id)
        if (!category) {
            return res.status(400).json({
                success: false
            })
        }
        
        res.status(200).json({
            success: true,
            msg: `show  product category with id ${req.params.id}`,
            data:category
        });
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
        
    };



    //@desc     update Product Category
    //@route    put /api/v1/productcategory/:id
    //@access   private
exports.updateProductCategory =async (req, res, next) =>
    
{

    try {
        const category = await ProductCategory.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!category) {
			return res.status(400).json({
				success: false,
			});
		}
        res.status(200).json({
			success: true,
			msg: `category with id ${req.params.id} is updated `,
			data: category,
		});
    } catch (err) {
        console.log(err);
          res.status(400).json({
				success: false,
			});
    }
    

    };


    //@desc     delete Product Category
    //@route    delete /api/v1/productcategory/:id
    //@access   private
    exports.deleteProductCategory = async (req, res, next) =>
    {
            try {
				const category = await ProductCategory.findByIdAndDelete(req.params.id);
				if (!category) {
					return res.status(400).json({
						success: false,
					});
				}
				res.status(200).json({
					success: true,
					msg: `category with id ${req.params.id} is Deleted `,
					
				});
			} catch (err) {
				console.log(err);
				res.status(400).json({
					success: false,
				});
			}
            

    };