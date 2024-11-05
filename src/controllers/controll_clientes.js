const customesModel = require("../model")

async function getClaint(req,res){

    const {id} = req.params
    console.log(id)

const obj = id? {_id:id} : null
 
  const listas = await customesModel.Model02.find(obj)
    res.send(listas)
   

}


async function getClaintId(req,res){

    const {id} = req.params
console.log(id)
if(id == null) throw new Error("invalido");

 else{
  const listas = await customesModel.Model02.find({_id:id})
    res.send(listas)
 }}




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
    getClaintId,
    postClaint,
    putClaint,
    delClaint
}