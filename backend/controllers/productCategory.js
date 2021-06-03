
    //@desc     create  Product Category
    //@route    Post /api/v1/productcategory
    //@access   private


    exports.createProductCategory = (req, res, next) =>
    {
        res.status(200).json({ success: true, msg: ` new category created` });
    }






    
    //@desc     Get All  Product Category
    //@route    get /api/v1/productcategory
    //@access   private,puplic
    exports.getAllProductCategory = (req, res, next) => { 
        res.status(200).json({ success: true, msg: 'show all product category' });
    };




    //@desc     Get Single  Product Category
    //@route    get /api/v1/productcategory/:id
    //@access   private,puplic
    exports.getSingleProductCategory = (req, res, next) =>
    {
        res.status(200).json({ success: true, msg: `show  product category with id ${req.params.id}` });
    };



    //@desc     update Product Category
    //@route    put /api/v1/productcategory/:id
    //@access   private
    exports.updateProductCategory = (req, res, next) =>
    {
            res.status(200).json({ success: true, msg: `category with id ${req.params.id} is created ` });

    };


    //@desc     delete Product Category
    //@route    delete /api/v1/productcategory/:id
    //@access   private
    exports.deleteProductCategory = (req, res, next) =>
    {
            res.status(200).json({ success: true, msg: `category with id ${req.params.id} is Deleted ` });

    };