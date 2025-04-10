async function getPedidos(req, res){
    
res.render("pedidos/pedidos.ejs")

}

async function postPedidos(req, res){
    
const {teste, OsDados} = req.body
console.log(OsDados, teste)


res.send("ok")

}

module.exports={
    getPedidos,
    postPedidos
}