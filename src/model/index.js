const mongoose = require("mongoose")

const shema = new mongoose.Schema({
        nome:String,
        preco:Number,

})
const shemaClints = new mongoose.Schema({
    nome:String,
    email:String,
    contato:Number,
    endereco:String,

})




const Model = mongoose.model("pedidos", shema)
const Model02 = mongoose.model("claints", shemaClints)


module.exports ={
    Model
  , Model02
}