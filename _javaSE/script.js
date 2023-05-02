 const act_buttom = document.getElementById("action-buttom");
 const erroLogin = document.getElementById("erro-login");
 const email = document.getElementById("container-email")
 const senha = document.getElementById("conteiner-senha")


 function loginError(){

    if(email.value == 'matheus' && senha.value == '123'){
      erroLogin.style.opacity = "0.0";
      erroLogin.style.color = "red";   
    }else{
      erroLogin.style.opacity = "1.0";
      erroLogin.style.color = "red"; 
    }
    
 }