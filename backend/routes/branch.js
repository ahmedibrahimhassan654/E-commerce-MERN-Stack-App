const express = require('express');

const {
	createBranch,
	getAllBranches,
	getSingleBranch,
	deleteBranch,
	updateBranch,
} = require('../controllers/branch');
const router = express.Router();

const { protect } = require('../midelware/auth');


router.route('/').get(getAllBranches).post(protect, createBranch);

router.route('/:id').get(getSingleBranch).put(protect, updateBranch).delete(protect,deleteBranch);

module.exports = router;
