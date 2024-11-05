const mongoose = require("mongoose")

const shema = new mongoose.Schema({
    nome:String,
    idade:Number,

})
const shemaClints = new mongoose.Schema({
    nome:String,
    idade:Number,
    contato:Number,

})

const Model = mongoose.model("cadastros", shema)
const Model02 = mongoose.model("clants", shemaClints)


module.exports ={
    Model
  , Model02
}