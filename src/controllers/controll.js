const customes = require("../model")


async function get(req,res){

    const {id} = req.params

const obj = id? {_id:id} : null
 
  const listas = await  customes.Model.find(obj)
    res.send(listas)
   

}

async function post(req,res){
   const {nome ,idade} = req.body

   const dados = await new customes.Model({
    nome,
    idade,
   })

   dados.save()

   res.sendStatus(200)

}

async function put(req,res){
const {id} = req.params

const update = await customes.Model.findByIdAndUpdate({_id:id},req.body,{new:true})


res.status(200).send(update)

}

async function del(req,res){
    const {id} = req.params
    const excluir = await customes.Model.findByIdAndDelete({_id:id})
    
    res.send(200)

}


module.exports={
    get,
    post,
    put,
    del
}