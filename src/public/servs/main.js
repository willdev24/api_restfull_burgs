
const main ={

    init:function(){
       this.adcionarEvents()


    },

    buscarHTML:function(){

        this.$ButaoEnviar = document.querySelector("#enviar")

    },


    adcionarEvents:function(){
     const self = this

    this.$ButaoEnviar.addEventListener("submit",this.Eventos.acessar.bind(self))

    },


Eventos:{

acessar:function(e){



}


}

}


main.init()