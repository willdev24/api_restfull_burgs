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
route.get("/cl:id", controllClaint.getClaintId)
route.post("/claint", controllClaint.postClaint)
route.put("/claint:id", controllClaint.putClaint)
route.delete("/claint:id", controllClaint.delClaint)

module.exports={
    route
}