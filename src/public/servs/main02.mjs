export default class user{

    constructor(useruario , senha){
       let _senha = this.senha
        this.useruario = useruario
        this.senhaAcess = senha 
       
        this.autentic = _senha

    }

    get novasenha(){
return this.autentic
        
    }
    
    set novasenha(_novaSenha){

        this.senha = _novaSenha
        
    }


 login(){

//   console.log(this.senha, this.autentic)
       if(this.senhaAcess == this.autentic && this.useruario == "Admin" ) return "acesso-liberado"

       else return "acesso-negado"
 }   
   


}

