import validar from "./llogin.mjs"

const main ={
        
    config_acesso: function(nome , senha ){

      return validar(nome, senha)
        
    } ,

init:function(){
    this.buscarHTML()
    this.adcionarEvents()

},

buscarHTML:function(){
    this.$formuEnv = document.querySelector("#formu")
 
},

adcionarEvents:function(){
 const self = this

 this.$formuEnv.addEventListener("submit", this.Eventos.acessar.bind(this))

},


Eventos:{

acessar: async function(e){
e.preventDefault()

const nome = document.forms["formu"].nome.value
const senha = document.forms["formu"].senha.value

const result = this.config_acesso(nome, senha)

console.log(result)
if(result == 'acesso-liberado') window.location.href = window.location.origin + "/loginAdministrator"
else window.alert("senha incorreta")
 window.location.reload()


},},

}


main.init()