const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors=require('colors')
const ErrorHandler=require('./midelware/error')
const connectDb=require('./config/db')






dotenv.config({ path: './config/config.env' })




connectDb()

//routefiles
const productcategory = require('./routes/productcategory')
const branch=require('./routes/branch')
const sub = require('./routes/subProduct')
const auth=require('./routes/auth')

const app = express()

//Body Parser
app.use(express.json());



//morgane (div loogin)middele ware 

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//mount routes
app.use('/api/v1/productcategory', productcategory);
app.use('/api/v1/branch', branch);
app.use('/api/v1/sub', sub)
app.use('/api/v1/auth', auth);



app.use(ErrorHandler)

const PORT = process.env.PORT || 5000


const server=app.listen(PORT, () => {
	console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV} Mode`.blue.bold);
});



//handle unhandled promise rejections
process.on('unhandledRejection', (err, Promise) => {
   console.log(`Error:${err.message}`.red.bold);
   

  server.close(() => process.exit(1));
});
