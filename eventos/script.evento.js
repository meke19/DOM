

function somar(){
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var placeresult = s.document.querySelector('#res2')
    res.innerHTML = s + placeresult
}