// ! variables */
//* target al nodo button kill
const buttonKill = document.getElementById('kill');

// ! Handlers */
//* ejecutar la animación de sacrificio 
const onClickMatar = (e) => {

    //* target victima en la animación
	const victima = document.getElementById('victima');
    /* //* añade la clase dead a la victima para iniciar la animación de muerte */
	victima.classList.add('dead');

    /* cambia el texto del botón */
    e.target.innerHTML = "Next kill";

    /* //! actualiza el DOM*/
	render();
};

const render = () => {  
    //* evento de sacrificio en button kill
    buttonKill.addEventListener( 'click', onClickMatar);
    console.log("render")
  };
  
  
  //! MAIN //
  render()