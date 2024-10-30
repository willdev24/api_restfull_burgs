const mongoose = require("mongoose")

function conet(){
mongoose.connect("mongodb://localhost:27017/loja")
const DB = mongoose.connection

DB.once("open" , ()=>{
    console.log("conectado ao banco de dados")
})

DB.on("erro",console.error.bind(console,"erro ao conectar o mongodb"))
}

module.exports={
    conet
}