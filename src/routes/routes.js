const controlADM = require("../controllers")
const controllRoutes = require("../controllers/controll")
const controllClaint = require("../controllers/controll_clientes")
const controlPedidos = require("../controllers/curstome_pedidos")
const controlMenus = require("../controllers/controllMenus")

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
route.get("/pedidos",controlPedidos.getPedidos)
route.post("/pedidos",controlPedidos.postPedidos)
//route.post()

//rota administrador 
route.get("/acess", controlADM.adm)
route.get("/loginAdministrator" , controlADM.painelAdmin)

//route menus
route.get("/mesa",controlMenus.getmesa)
route.get("/relatorio",controlMenus.getrelatorios)
route.get("/config",controlMenus.getconfig)
route.get("/historicoPedidos", controlMenus.gethistoricoPedidos)



module.exports={
    route
}