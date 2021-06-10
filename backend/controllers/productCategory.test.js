const productCategory = require('./productCategory');

// @ponicode
describe('productCategory.createProductCategory', () => {
	test('0', async () => {
		await productCategory.createProductCategory({ body: true }, 200, {});
	});

	test('1', async () => {
		await productCategory.createProductCategory(
			{ name: 'كاتجورى 6', description: 'كاتجورى 6 ديسكريبشن ' },
			500,
			{}
		);
	});
});
