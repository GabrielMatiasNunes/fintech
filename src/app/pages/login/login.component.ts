import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  botaoDesabilitado:boolean = true;
  login: string= "";
  senha: string= "";

  validarFormulario(){
    if(this.login.trim()!=="" && this.senha.trim() != ""){
       this.botaoDesabilitado = false;

    }else{
      this.botaoDesabilitado = true;
    }

  }


  fazerLogin(){

  }
  
  
  
  
  //quando acionar o botao, chama esse metodo
  onBotaoClicado(){
    alert("botão clicado ");
    
  }
  teclaDigitada(event: KeyboardEvent): void {
 alert("o usuario digitol    " + event.key)
 }


}
