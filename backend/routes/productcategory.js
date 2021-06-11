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

router.use('/:productcategoryId/sub', SubProductCategoryRouter);

router.route('/')
    .get(getAllProductCategory)
    .post(createProductCategory)


router.route('/:id')
    .get(getSingleProductCategory)
    .put(updateProductCategory)
    .delete(deleteProductCategory)


module.exports=router