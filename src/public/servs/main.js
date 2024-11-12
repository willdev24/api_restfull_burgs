



const main ={
        
        config_acesso: function(nome , senha ){
 

            
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

 
console.log(this.config_acesso(nome,senha))
 
},


},

}


main.init()