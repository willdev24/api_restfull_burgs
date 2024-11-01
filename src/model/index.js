const mongoose = require("mongoose")

const shema = new mongoose.Schema({
    nome:String,
    idade:Number,

})

const Model = mongoose.model("cadastros", shema)
const Model02 = mongoose.model("clants", shema)


module.exports ={
    Model,
    Model02
}