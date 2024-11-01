const controllRoutes = require("../controllers/controll")
const controllRoutes02 = require("../controllers/claints")


const route = require("express").Router()


route.get("/:id?",controllRoutes.get)
route.post("/",controllRoutes.post)
route.put("/:id",controllRoutes.put)
route.delete("/:id",controllRoutes.del)


//rotas clientes
//route.

module.exports={
    route
}