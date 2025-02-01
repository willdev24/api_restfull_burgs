 function adm(req, res){

    res.render("acesso/index")

}

 function painelAdmin( req, res){

    res.render("painel.ejs")

}

module.exports ={
    adm,
    painelAdmin
}