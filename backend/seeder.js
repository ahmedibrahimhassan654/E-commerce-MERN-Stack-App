const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const ProductCategory = require('./models/ProductCategory');
const Branch=require('./models/Branch')
const Sub = require('./models/ProductSub');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const ProductCategories = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/product category.json`, 'utf-8')
);

const Branches = JSON.parse(fs.readFileSync(`${__dirname}/_data/branch.json`, 'utf-8'));

const subs = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/subs.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
  try {
    await ProductCategory.create(ProductCategories);
    await Branch.create(Branches);
    await Sub.create(subs);
    // await User.create(users);
    // await Review.create(reviews);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await ProductCategory.deleteMany();
     await Branch.deleteMany();
     await Sub.deleteMany();
    // await Review.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};
//node seeder -i
if (process.argv[2] === '-i') {
  importData();
  //node seeder -d
} else if (process.argv[2] === '-d') {
  deleteData();
}
