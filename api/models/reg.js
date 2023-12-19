const mongoose=require('mongoose')

const regSchema=mongoose.Schema({
    username:String,
    password:String,
    status:{type:String,default:"active"}
})

module.exports=mongoose.model('reg',regSchema)