const mongoose = require("mongoose")

const shema = new mongoose.Schema({
    nome:String,
    idade:Number,

})

const Model = mongoose.model("cadastros", shema)

module.exports ={
    Model
}