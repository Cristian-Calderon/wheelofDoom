// ! variables */
//* target al nodo button kill
const buttonKill = document.getElementById('kill');
//* target al nodo button next
const buttonNext = document.getElementById('next');

const listaVivos = document.getElementById('vivos');

// * target al nodo #add en hmtl
const buttonAdd = document.getElementById('add');


// * lista de muertos
const ulListaMuertos = document.getElementById("muertos");
const ulListaVivos = document.getElementById("vivos");



let noRepetir;
let noRepetirVivos;

const muertos = []; //cada valor que yo le pase a [] va a ser un valor de un array

const alumnos = [
	'Adrián Suñe',
	'Albert Arques',
	'Alejandra Morales Cuitiño',
	'Andrés Esteban Patiño',
	'Alexandra Jaramillo',
	'Camilo Rocca',
	'Carla Luppi',
	'Cristian Calderon',
	'David Pico',
	'Eberth Castro',
	'Erick Crespin',
	'federico-gatti',
	'Francisco Aguirre',
	'Gary Lima',
	'Guillerm',
	'Ingrid Barrachina',
	'Isabel Castro',
	'Jerry Aiyaniyo',
	'Judit Calvet Colomé',
	'Lidia LG',
	'Mamadou',
	'Mario Valdes',
	'Mateus Sandoval Balada',
	'Oksana Fedyukova',
	'Rocío Cejudo Soronellas',
	'Rodrigo Fernández',
	'Teix Garcia',
	'Alejandro Rodriguez',
];

// ! Handlers */
//* ejecutar la animación de sacrificio
const onClickMatar = (e) => {
	//* target victima en la animación
	const victima = document.querySelectorAll('.victima');
	const asesino = document.querySelectorAll('.sacrificador');
  const claseDead = document.querySelectorAll('.dead');

  if(claseDead.length == 0) { 	
	// victimas es un array y lo recorro con un forEach
	victima.forEach((item) => {
		item.classList.add('dead');
	});

	// Asesino es un array y lo recorro con un forEach
	asesino.forEach((item) => {
		item.classList.add('dead');
	});
 
	// Evento Random

    matar();

  }
  
	/* //! actualiza el DOM*/
	render();
};

//* pasar al siguiente
const onClickNext = (e) => {
	const claseDead = document.querySelectorAll('.dead');

	if (claseDead.length > 0) {
		claseDead.forEach((item) => {
			item.classList.remove('dead');
		});

    
	}
	/* //! actualiza el DOM*/
	// render();
};

//* funcion a la que se llama desde el boton de añadir
const onClickAdd = (e) => {
	// * valor del input (nombre del sacrificado)
	let nuevoInput = document.getElementById('name').value;
	//Con .value solo se agarra el valor que se hubiese escrito dentro del input

	//* lista de alumnos
	let existen;
	//* lista de muertos
	let fallecidos;

	alumnos.forEach((index) => {
		if (nuevoInput == index) {
			existen = true;
		} else {
			existen = false;
		}
	});

	muertos.forEach((indexMuerto) => {
		if (nuevoInput == indexMuerto) {
			fallecidos = true;
		} else {
			fallecidos = false;
		}
	});

  //* inicio del evento
	if(muertos.length < 0 || fallecidos == undefined) {
		fallecidos = false;
	}

	//! que el valor no tenga un string vacio
	if (nuevoInput != '') {
		// ! recorre el array y comprueba que el valor no sea igual a los existentes en el array
		//* comprueba los valores
		if (existen == false && fallecidos == false) {
			alumnos.push(nuevoInput);
		} else {
			if (fallecidos == true) {
				//* si el valor es igual muestra el mensaje
				Swal.fire({
					title: 'No puedes añadirlo',
					html: 'la victima ya ha muerto',
					timer: 1500,
					timerProgressBar: true,
				});
			
			} else {
				Swal.fire({
					title: 'No puedes añadirlo',
					html: 'la victima ya se encuentra en el ritual',
					timer: 1500,
					timerProgressBar: true,
				});
			}
		}
	}
};

//! seleccionar a una victima dentro de el array alumnos
function matar() {
	//* Genera un NUMERO aleatorio teniendo en cuenta el total de valores en el array de alumnos
	//* math.random() = un numero del 0 al 1
	let aletorio = parseInt(Math.random() * alumnos.length);

	//* numero
	console.log(`${aletorio} es ${alumnos[aletorio]}`);

	//* si hay victimas en el ritual
	if(alumnos.length > 0) {
		//* Restador de array
		let eliminar = alumnos.splice(aletorio, 1);

		//* mete al muerto (nombre) en el array de muertos
		muertos.push(eliminar);

		//* Animación de alerta de internet (adjunta libreria jss) https://sweetalert2.github.io/
		Swal.fire({
			title: eliminar,
			html: 'MUERTO',
			timer: 1500,
			timerProgressBar: true,
		});
	} else {
		//* alerta externa con timer
		Swal.fire({
			title: 'A LA FREGADA TODOS',
			timer: 1000,
			timerProgressBar: true,
		});
	}
}


function CrearlistaMuertos(){
if( muertos.length > 0){

for (let index = 0; index < muertos.length; index++) {

if( muertos.length -1 == index ){

  if( muertos[index] != noRepetir){

    noRepetir = muertos[index];
    let li = document.createElement("li"); 
    li.textContent  = muertos[index];
    ulListaMuertos.appendChild(li);
  }
}
  
}
 
}
}

function Crearlistavivos(){
	if( alumnos.length > 0){
	
	for (let index = 0; index < alumnos.length; index++) {
	
		let li = document.createElement("li"); 
		li.textContent  = alumnos[index];
		ulListaVivos.appendChild(li);
	}
	

	}
	}

const render = () => {
	//* evento de sacrificio en button kill
	buttonKill.addEventListener('click', onClickMatar);
	buttonNext.addEventListener('click', onClickNext);

	//* evento de añadir con el button add
	buttonAdd.addEventListener('click', onClickAdd);
  CrearlistaMuertos();
  Crearlistavivos();
};

//! MAIN //
render();

