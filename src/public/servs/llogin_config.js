
const { user } = require("./configUser");

//criar nova senha
user.prototype.novasenha = "admin" // caso queira criar nova senha senha 

async function acesso(_login, senhan ){

const usua = _login // aq vai recer o nome 
const senha = senhan // aq vai receber a senha 

//acesso
const admin = new user(usua, senha)
admin.login()

}

module.exports={
 
    acesso
}


