import user from "./main02.mjs"


//criar nova senha
user.prototype.novasenha = "admin"

 export default function validar(login, _senha){

const usua = login
const senha = _senha

//acesso
const admin = new user(usua, senha)

console.log(admin.login())

}




