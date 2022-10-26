// ! variables */
//* target al nodo button kill
const buttonKill = document.getElementById('kill');
const buttonNext = document.getElementById('next');

// ! Handlers */
//* ejecutar la animación de sacrificio 
const onClickMatar = (e) => {

    //* target victima en la animación
    const victima = document.querySelectorAll(".victima");
    const asesino = document.querySelectorAll(".sacrificador");
  
    // victimas es un array y lo recorro con un forEach
    victima.forEach((item)=>{item.classList.add('dead');});

     // Asesino es un array y lo recorro con un forEach
    asesino.forEach((item)=>{item.classList.add('dead');});

    // Evento Random
  if (muertos.length == 0){
  matar();
 };

   
    /* //! actualiza el DOM*/
    render();
};

//* pasar al siguiente
const onClickNext = (e) => {
const claseDead = document.querySelectorAll(".dead");
if( claseDead.length > 0 ){
  claseDead.forEach((item)=>{item.classList.remove('dead');});
  matar();  
};
  /* //! actualiza el DOM*/
  render();
}


const render = () => {  
    //* evento de sacrificio en button kill
    buttonKill.addEventListener( 'click', onClickMatar);
    buttonNext.addEventListener( 'click', onClickNext);
    // Recorrer el Array alumnos
     alumnos.forEach((item)=>{
         let li = document.createElement("li");
         li.innerText = item;
       document.getElementById("vivos").appendChild(li);});
    // console.log("render")
  };



  


  const alumnos = [
    "Adrián Suñe",
    "Albert Arques",
    "Alejandra Morales Cuitiño",
    "Andrés Esteban Patiño",
    "Alexandra Jaramillo",
    "Camilo Rocca",
    "Carla Luppi",
    "Cristian Calderon",
    "David Pico",
    "Eberth Castro",
    "Erick Crespin",
    "federico-gatti",
    "Francisco Aguirre",
    "Gary Lima",
    "Guillerm",
    "Ingrid Barrachina",
    "Isabel Castro",
    "Jerry Aiyaniyo",
    "Judit Calvet Colomé",
    "Lidia LG",
    "Mamadou",
    "Mario Valdes",
    "Mateus Sandoval Balada",
    "Oksana Fedyukova",
    "Rocío Cejudo Soronellas",
    "Rodrigo Fernández",
    "Teix Garcia",
  ];

  
  
  const muertos = []; //cada valor que yo le pase a [] va a ser un valor de un array
  //escribe alumnos vivos
//   document.getElementById("vivos").innerHTML = alumnos;
  //funcion a la que se llama desde el boton de añadir
  function add() {
      //agarra valor del input
    
    let nuevo = document.getElementById("name").value; //Con .value solo se agarra el valor que se hubiese escrito dentro del input
    //añade al array alumnos con el metodo push siempre que no sea un valor vacio
    console.log(nuevo)
    if(nuevo != ""){
      alumnos.push(nuevo);
      //reescribe alumnos vivos
     document.getElementById("vivos").innerHTML = alumnos;
    
    }
    console.log(alumnos)
    
  }
  //funcion a la que se llama desde el boton de matar
  function matar() {
    console.log(alumnos);
    //genera un NUMERO aleatorio teniendo en cuenta el total de valores en el array de alumnos
    const aletorio = parseInt(Math.random() * alumnos.length); //demostración quitando parseInt
    console.log(aletorio);
  
  
    console.log(alumnos[aletorio]);
    //if con dos opciones dependiendo si el array alumnos esta lleno o vacio
    if (alumnos.length > 0) {
      // mete al muerto (nombre) en el array de muertos
      muertos.push(alumnos[aletorio]);
      // funcion alert con timer externa
        //   animación de alerta de internet (adjunta libreria jss)
      Swal.fire({
        title: alumnos[aletorio],
        html: "MUERTO",
        timer: 1500,
        timerProgressBar: true,
      });
      //restador de array
      alumnos.splice(aletorio, 1); 
    // Crea elementos lista y añade el alumno
      
      //reescribe alumnos vivos
    //   document.getElementById("vivos").innerHTML = alumnos;
      //escribe alumnos muertos
      document.getElementById("muertos").innerHTML = muertos;
      console.log(alumnos);
      console.log(muertos);
      }
    else {
      document.getElementById("vivos").innerHTML = "TAN TOS MUERTOS";
      //alerta externa con timer
      Swal.fire({
        title: "A LA FREGADA TODOS",
        timer: 1000,
        timerProgressBar: true,
      });
    }
  }

    
  //! MAIN //
  render()