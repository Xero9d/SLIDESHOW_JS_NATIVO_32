/**
 * Funciones en el Script slideShow.js
 * 
 * Este slideshow tendrá unos controladores (flechas) para pasar hacia delante y hacia atrás los slides
 * 
 * También tendrá unos puntos para poder seleccionar y ver cada uno de los slides
 * 
 * También será automático y podremos ir viendo cada slide pasado un cierto tiempo
*/
 
//Inicializamos el contador

let slideIndex = 1;

showSlide(slideIndex);

// Seleccionamos las flechas de next y prev slide

let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");

nextSlideArrow.addEventListener("click", function(){
    nextPrevSlide(1);
})
prevSlideArrow.addEventListener("click", function(){
    nextPrevSlide(-1);
})

/**
 * ¡¡Crear un apartado de documentación como este con el "/**" automaticamente hace referencia a los parámetros de la función creada debajo!!
 * 
 * @param {number} index Esto indica que al parámetro index solo se le puede atribuir números
 * 
 * Esta función aumenta o disminuye el slideIndex dependiendo del parámetro que le llegue desde la llamada.
 */
function nextPrevSlide(index) {
    slideIndex = slideIndex + index;
    
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNumber 
 * 
 * Esta función mostrará el slide correspondiente a la posición que le llegue
 * 
 * También tendrá que calcular si nos pasamos por arriba o por abajo en el índice
 */
function showSlide(slideNumber) {
    let arrSlides = document.querySelectorAll(".mySlides");
    let arrDots = document.querySelectorAll(".dot");

    //Si nos pasamos de ir para adelante o detrás, hacemos unas condiciones que nos aseguren mantenerse siempre en los valores asociados al array.
    if (slideNumber > arrSlides.length) {
        slideIndex = 1;
    }
    if (slideNumber < 1) {
        slideIndex = arrSlides.length;
    }

    //Ocultamos todos los slides o desactivando los puntos
    for (i = 0; i < arrSlides.length; i++) {
        arrSlides[i].style.display = "none";
        arrDots[i].className = arrDots[i].className.replace(" active", "");
    }

    //Mostramos el slide y el dot que corresponda al índice
    arrSlides[slideIndex - 1].style.display = "block";
    arrDots[slideIndex - 1].className += " active";
}