const customesModel = require("../model")

async function getClaint(req,res){

    const {id} = req.params


const obj = id? {_id:id} : null
 
  const listas = await customesModel.Model02.find(obj)
    res.render("clientes/clientes.ejs")
   

}


async function postClaint(req, res){
const {nome, email ,contato, endereco} = req.body

    const clients = await new customesModel.Model02({
        nome,
        email,
        contato,
        endereco
    })

    clients.save()
    
    res.status(200).send("cadastrado")
    
}
async function putClaint(req, res){

    const {id} = req.params
   
    const update = await customesModel.Model02.findByIdAndUpdate({_id:id},req.body,{new:true})
    
    res.send(update)


    
}
async function delClaint(req, res){

    const {id} = req.params
    const excluir = await customesModel.Model02.findByIdAndDelete({_id:id})
 
    if(excluir == null) return res.send("cliente ainda nao cadastrado")

    res.send("cliente excluido")
    
}

module.exports={
    getClaint,
    postClaint,
    putClaint,
    delClaint
}