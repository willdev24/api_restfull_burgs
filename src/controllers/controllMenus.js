 function getmesa(req, res){

    res.render("mesa.ejs")

}

 function getrelatorios( req, res){

    res.render("relatorios.ejs")

}

function gethistoricoPedidos( req, res){

    res.render("histoicoPedidos.ejs")

}
function getconfig( req, res){

    res.render("config.ejs")

}
module.exports ={
    getmesa,
    getconfig,
    gethistoricoPedidos,
    getrelatorios
}