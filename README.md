NUNCA DEJARLE EL DEBUGGER PUESTO EN EL CÓDIGO, ESTO QUITA PUNTOS

debugger;

Si antes de una función con un parámetro establecido pero sin valores usamos un /** automaticamente hace referencia a este parámetro para que podamos decirle qué tipo de valores tendrá y demás info

La función setInterval nos permite automatizar un proceso en un determinado tiempo seleccionado en ms.

setInterval(proceso, tiempoenmilisegundos) https://www.w3schools.com/jsref/met_win_setinterval.asp 

El setInterval, al pasarle un proceso (función a realizar), si esa función tiene unos parámetros ya establecidos hay que declarar una función anónima y dentro de esa llamar a la función con el parámetro establecido. *MIRAR LÍNEA 94 slideShow.js*
En caso de que la función no tenga un parámetro establecido basta con llamarla sin los paréntesís. *Mirar línea 98 slideShow.js*

Tenemos que definir los eventos de click sobre los puntos (dot) dentro del archivo slideShow.js

1) Eliminamos los eventos del DOM (HTML) de onclick en los puntos.
2) Sacamos la variable arrDots fuera de la función showSlide(), la podemos poner junto el slideIndex y autoSlide.
3) Recorremos el array arrDots con un bucle for (o con forEach) y a cada dot le asociamos un evento click (con addEventListener).
4) Dentro del evento tendremos que llamar a las funciones en orden:
    - stopAutoSlide()
    - currentDotSlide()
    - startAutoSlide()


EXTRA: 
Añadimos más slides y más puntos.