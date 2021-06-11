const express = require('express');

const { createSub, getAllSub, getSingleSub, deleteSub, updateSub } = require('../controllers/subProduct');
const router = express.Router({mergeParams:true});

router.route('/')
    .get(getAllSub).
    post(createSub);

router.route('/:id').get(getSingleSub).put(updateSub).delete(deleteSub);

module.exports = router;
