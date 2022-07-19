/*Elementos seleccionados de HTML con los que trabajaremos*/
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const btn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


//Esta es la mejor manera de implementar codigo, por separado
function sumarValores(){
    let r = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.append(r)
}

const borrar =()=> resultado.innerText = "";



