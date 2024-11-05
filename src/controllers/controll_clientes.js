const customesModel = require("../model")

async function getClaint(req,res){

    const {id} = req.params

const obj = id? {_id:id} : null
 
  const listas = await customesModel.Model02.find(obj)
    res.send(listas)
   

}

async function postClaint(req, res){
const {nome, idade,contato} = req.body

    const clients = await new customesModel.Model02({
        nome,
        idade,
        contato,
    })

    clients.save()
    
    res.status(200).send("cadastrado")
    
}
async function putClaint(req, res){

    
    
}
async function delClaint(req, res){

    
    
}

module.exports={
    getClaint,
    postClaint,
    putClaint,
    delClaint
}