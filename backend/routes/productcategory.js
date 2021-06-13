const express = require('express')

const {
    createProductCategory,
    getAllProductCategory,
    getSingleProductCategory,
    deleteProductCategory,
    updateProductCategory
} = require('../controllers/productCategory')

//Include Other Resource Routes
const SubProductCategoryRouter=require('./subProduct')



const router = express.Router()

const { protect } = require('../midelware/auth');

router.use('/:productcategoryId/sub', SubProductCategoryRouter);

router.route('/').get(getAllProductCategory).post(protect,createProductCategory);


router
	.route('/:id')
	.get(getSingleProductCategory)
	.put(protect, updateProductCategory)
	.delete(protect,deleteProductCategory);


module.exports=router