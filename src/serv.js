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
/*
app.use(cors({

    origin:function(origin, callback){

     if(enderecos.indexOf(origin !== -1 || !origin )) callback(null, true) 

        else{
            callback(new console.error("errro ao tentar linkar serv"))
        }
    }

}))
*/


app.get("/:id?",route)
app.post("/",route)
app.put("/:id",route)
app.delete("/:id",route)

/*app.get("/teste",(req, res)=>{
res.send("ok")
})
*/

//app.get("/claint",route02)
//app.post("/claint",route02)
//app.put("/claint:id",route)
//app.delete("/claint:id",route)



const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}`)
})