const express = require('express');

const { createSub, getAllSub, getSingleSub, deleteSub, updateSub } = require('../controllers/subProduct');
const router = express.Router({mergeParams:true});
const { protect } = require('../midelware/auth');
router.route('/').get(getAllSub).post(protect,createSub);

router.route('/:id').get(getSingleSub).put(protect, updateSub).delete(protect,deleteSub);

module.exports = router;
