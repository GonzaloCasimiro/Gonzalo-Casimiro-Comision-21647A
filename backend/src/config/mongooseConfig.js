require('dotenv').config({ path: __dirname + '/../.env' });

const mongoose = require('mongoose');
const MONGO_DB_URI=process.env.MONGO_DB_URI;
const connectMongoose=async()=>{
    try{
        
        await mongoose.connect(MONGO_DB_URI)
        console.log('exito')
    }
    catch(error){
        console.log(process.env.MONGO_DB_URI)
        console.log('Error',error);
    }
}
module.exports=connectMongoose;
