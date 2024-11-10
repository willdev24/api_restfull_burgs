const { user } = require("./main");

//criar nova senha
user.prototype.novasenha = "admin"


const usua = "Admin"
const senha = "admin"

//acesso
const admin = new user(usua, senha)


console.log(admin.login())






