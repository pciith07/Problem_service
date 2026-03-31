const mongoose = require('mongoose')
const {DB_URL,NODE_ENV} = require('./index.js')

async function connectToDB(){
    try{
        if(NODE_ENV === 'development'){
            await mongoose.connect(DB_URL)
        }
        return true;
    }
    catch(error){
        console.log("Unable to connect to DB server")
        console.log(error)
        return false;
    }

}

module.exports = connectToDB;
