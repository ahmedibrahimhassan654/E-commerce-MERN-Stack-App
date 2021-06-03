const express = require('express')
const dotenv = require('dotenv')
const morgan =require('morgan')

//routefiles
const productcategory= require('./routes/productcategory')


dotenv.config({ path: './config/config.env' })


const app = express()


//morgane (div loogin)middele ware 

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//mount routes
app.use('/api/v1/productcategory', productcategory);





const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV} Mode`);
});



