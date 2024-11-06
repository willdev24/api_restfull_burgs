const express = require("express")
const cors = require("cors")
const { route } = require("./routes/routes")
const { conet } = require("./database_/database")

const app = express()
app.use(express.json())

//conectar o banco de dados
conet()

app.use(cors())

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



app.use("/",route)
app.use("/",route)
app.use("/:id",route)
app.use("/:id",route)



app.use("/claint",route)
app.use("/claint",route)
app.use("/claint/:id",route)
app.use("/claint/:id",route)



const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}`)
})