const controlADM = require("../controllers")
const controllRoutes = require("../controllers/controll")
const controllClaint = require("../controllers/controll_clientes")


const route = require("express").Router()


route.get("/",controllRoutes.get)
route.post("/",controllRoutes.post)
route.put("/:id",controllRoutes.put)
route.delete("/:id",controllRoutes.del)


//rotas clientes
//route.

route.get("/claint", controllClaint.getClaint)
route.post("/claint", controllClaint.postClaint)
route.put("/claint/:id", controllClaint.putClaint)
route.delete("/claint/:id", controllClaint.delClaint)

//lista de pedidos
//route.get()
//route.post()

//rota administrador 
route.get("/acess", controlADM.adm)
route.get("/loginAdministrator" , controlADM.painelAdmin)


module.exports={
    route
}