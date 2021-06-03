const express = require('express')


const router = express.Router()






router.get('/', (req, res) =>
{
    res.status(200).json({success:true,msg:'show all product category'})
})

router.get('/:id', (req, res) => {
	res.status(200).json({ success: true, msg: `show  product category with id ${req.params.id}` });
});


router.post('/', (req, res) => {
	res.status(200).json({ success: true, msg: `create new category ` });
});

router.put('/:id', (req, res) => {
});

router.delete('/:id', (req, res) => {
});



module.exports=router