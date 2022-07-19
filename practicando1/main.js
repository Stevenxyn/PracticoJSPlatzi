/*
Con querySelectos elegimos las etiquetas que no cuentan con ID o clase, las sueltas diria yo.*/

const h1 = document.querySelector('h1')
const parrafito = document.querySelector('.parrafito');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');
const h2Prueba = document.getElementById('h2Prueba')
const p = document.querySelector(".primero");


/*Con {} imprimimos un objeto con las propiedades de cada uno donde podemos validar los valores que cuentan los inputs y metodos que podemos aplicar a cada uno junto a los datos que esten mostrando o guardando a lo largo de la ejecucion*/


console.log({
    h1,
    p,
    parrafito,
    parrafoId,
    /*Inputs guardan string's al asignar algo en este punto se guarda pero podemos acceder a el desde consola con el metodo .value*/
    input
})

console.log(typeof h1.innerHTML)

//Modificar elemento seleccionando con codigo HTML
h1.innerHTML = 'Texto actualizado <br> fachaaa';

//este metodo solo permite modificar y agregar textos
h2Prueba.innerHTML = 'H2 modificado no permite agregar html';


//ayuda a leer los atributos de los elementos html en este caso H1 tener en cuenta guardar antes en variable lo que vayamos a validar de atributos ESTO CAMBIA LAS CLASES 

console.log(p.getAttribute('class'));

//leer atributos de un elemento ID 
const leerId = document.querySelector('#segundo')
console.log(leerId.getAttribute('id'));

/*modificar el atributo de la clase o ID que seleccionemos.
Con este script cambie el ID de #segundo a #verde
en css aplique un estilo para este # y cambio al color verde */
leerId.setAttribute('id', 'verde')

/******************************************/

/*Agregamos clases sin modificar el ID*/
leerId.classList.add('amarillo')
//Eliminar la clase si existe
leerId.classList.remove('amarillo')

//modificar valores de inputs
//input.value = "asdas";
input.placeholder = "Tu nombre"
//creando variable de donde asignaremos datos
const metiendoImagen = document.getElementById('metiendoImagen')
//crear elementos que queramos
const insertarImagen = document.createElement('img');

/*le asignamos al elemento creado el atributo que metemos a src*/
insertarImagen.setAttribute('src', 'https://files.porsche.com/filestore/image/multimedia/none/motorsport-racingcars-991-2nd-gt3-r-launch-intro/normal/9583dde4-8274-11eb-80d3-005056bbdc38;sN;twebp/porsche-normal.webp')
console.log(insertarImagen);
/*De esta manera borramos datos para que se cargue mas limpio lo que sea que subamos*/
metiendoImagen.innerText = "";

//append agregan elemento despues del contenido
metiendoImagen.append(insertarImagen)