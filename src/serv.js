const express = require("express")
const cors = require("cors")
const { route } = require("./routes/routes")
const { conet } = require("./database_/database")

const app = express()

//conectar o banco de dados
conet()

//app.use(cors())

const enderecos = [

]

app.use(cors({


}))



app.get("/id:?",route)



const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}`)
})