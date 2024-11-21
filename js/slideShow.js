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
let autoSlide;
let arrDots = document.querySelectorAll(".dot");

showSlide(slideIndex);

//Iniciamos la función del autoSlide al inicializar la web

startAutoSlide();

// Seleccionamos las flechas de next y prev slide

let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");

nextSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(1);
    startAutoSlide();
})
prevSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(-1);
    startAutoSlide();
})

//Eventos click en puntos


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
 * Esta función actualiza la variable slideIndex igualando su valor al índice del punto (dot) que le llegará como parámetro.
 * 
 * @param {number} dotIndex 
 */
function currentDotSlide(dotIndex) {
    slideIndex = dotIndex + 1;
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

// Automatizamos la llamada a la función nextPrevSlide() usando la función built-in setInterval()
// Le pasamos el parámetro con el valor 1 para que vaya añadiendolé uno a la función nextPrevSlide y por ende las slides vayan avanzando

function startAutoSlide() {
    autoSlide = setInterval(function(){nextPrevSlide(1); }, 2000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

arrDots.forEach(addEventListener("click", function(){
    stopAutoSlide();
    currentDotSlide();
    startAutoSlide();
}));

