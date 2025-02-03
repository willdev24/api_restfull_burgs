const express = require("express")
const cors = require("cors")
const path = require("path")
const { route } = require("./routes/routes")
const { conet } = require("./database_/database")
const app = express()

//configuraçoes necessarias para funcionabilidades deste servidor 
app.use(express.static(path.join(__dirname,"public")))
app.set("views" ,path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.json())


//conectar o banco de dados
conet()

//configurando o cors

const enderecos = [

]

app.use(cors({

    origin:function(origin, callback){

     if(enderecos.indexOf(origin !== -1 || !origin )) callback(null, true) 

        else{
            callback(new console.error("errro ao tentar linkar serv"))
        }
    }

}))


//rotas da api restfull
//rotas dos produtos

app.get("/",route)
app.post("/",route)
app.put("/:id",route)
app.delete("/:id",route)

//totas dos clientes
app.get("/claint",route)
app.post("/claint",route)
app.put("/claint/:id",route)
app.delete("/claint/:id",route)

//rotas dos pedidos
app.get("/pedidos", route)

//rotas painel administrativo
app.get("/acess",route)
app.get("/loginAdministrator",route)

//rota menus
app.get("/mesa",route)
app.get("/config",route)
app.get("/relatorio",route)
app.get("/historicoPedidos",route)


//porta do servidor 
const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}`)
})