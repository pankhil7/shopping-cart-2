const mongoose=require('mongoose');
const PORT=5555;
const DB_NAME="ecomauth";
const DB_URL='mongodb://localhost:27017/'+DB_NAME;
module.exports={PORT,DB_URL};