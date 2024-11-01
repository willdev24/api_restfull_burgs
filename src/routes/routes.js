const controllRoutes = require("../controllers/controll")

const route = require("express").Router()


route.get("/:id?",controllRoutes.get)
route.post("/",controllRoutes.post)
route.put("/:id",controllRoutes.put)
route.delete("/:id",controllRoutes.del)

module.exports={
    route
}