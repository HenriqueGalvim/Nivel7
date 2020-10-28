   
let list = document.querySelector(".lista")
  let list2 = document.querySelector(".lista2")

  let botao= document.querySelector("#botao")
  let botao2= document.querySelector("#botao2")

botao.addEventListener("click", ()=> {
 	list.style.display="block"
 	botao.style.display="none"
 })

 botao2.addEventListener("click", ()=> {
 	list.style.display="none"
 	list2.style.display="block"
 	botao2.style.display="none"
 })
