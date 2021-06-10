const express = require('express');

const {
	createBranch,
	getAllBranches,
	getSingleBranch,
	deleteBranch,
	updateBranch,
} = require('../controllers/branch');
const router = express.Router();

router.route('/').get(getAllBranches).post(createBranch);

router.route('/:id').get(getSingleBranch).put(updateBranch).delete(deleteBranch);

module.exports = router;
