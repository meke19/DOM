var a = document.querySelector('#comu')
var o = document.querySelector('#outro');
var s = document.querySelector('#botao')
s.addEventListener('mouseout', saindo)
s.addEventListener('click', clique)
a.addEventListener('click', clicou)


function clique(){
    s.style.backgroundColor = "red"


}
function saindo(){
    s.style.backgroundColor = "yellow"
}