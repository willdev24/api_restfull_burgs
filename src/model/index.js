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

const schemaPedidos = new mongoose.Schema({
    nome:String,
    data:String,
    pedidos:Array
})


const Model = mongoose.model("pedidos", shema)
const Model02 = mongoose.model("claints", shemaClints)
const model03 = mongoose.model("listaDEpedidos", schemaPedidos)

module.exports ={
    Model,
    Model02,
    model03
}