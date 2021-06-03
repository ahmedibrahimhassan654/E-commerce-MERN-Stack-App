const express = require('express')

const {
    createProductCategory,
    getAllProductCategory,
    getSingleProductCategory,
    deleteProductCategory,
    updateProductCategory
} = require('../controllers/productCategory')
const router = express.Router()



router.route('/')
    .get(getAllProductCategory)
    .post(createProductCategory)


router.route('/:id')
    .get(getSingleProductCategory)
    .put(updateProductCategory)
    .delete(deleteProductCategory)


module.exports=router