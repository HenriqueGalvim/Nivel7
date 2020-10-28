 const hamburguer= document.querySelector(".hamburguer")
    const navlist= document.querySelector(".nav-list")
    hamburguer.addEventListener("click", ()=>{
  	  navlist.classList.toggle("active")  // Quando clicamos, a classe active transforma o transform que estava em -100 Y para 0 Y
    })                                     // Ou seja, trazendo a nossa vista o menu escondido

let home=document.querySelector("#home")
 
 let services=document.querySelector("#servicos")

function ola() {
	window.alert("É só entrar em contato comigo que rola")
}
home.addEventListener("click",()=>{
	window.location.href = "https://henriquegalvim.github.io/Primeiro-Projeto-Pessoal/";
});

