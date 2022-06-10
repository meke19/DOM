
var titulo = document.querySelector("#ux")


titulo = document.createTextNode("TItulo alterado")

var subtitle = document.querySelector(".us")

subtitle = document.createTextNode("Segundo titulo do site")


 var body = document.querySelector("body h1")

 body.appendChild(titulo)

 var test = document.querySelector(".Test")
 console.log(test)

 var func = document.createTextNode("Inserindo um texto a ele")

test.appendChild(func)

