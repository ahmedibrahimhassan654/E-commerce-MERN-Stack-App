const express = require('express')
const dotenv = require('dotenv')
const morgan =require('morgan')
const connectDb=require('./config/db')






dotenv.config({ path: './config/config.env' })




connectDb()

//routefiles
const productcategory= require('./routes/productcategory')

const app = express()


//morgane (div loogin)middele ware 

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//mount routes
app.use('/api/v1/productcategory', productcategory);





const PORT = process.env.PORT || 5000


const server=app.listen(PORT, () => {
	console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV} Mode`);
});



//handle unhandled promise rejections
process.on('unhandledRejection', (err, Promise) => {
   console.log(`Error:${err.message}`);
   

  server.close(() => process.exit(1));
});
