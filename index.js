precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// llamamos a la funcion IncrementFunction al hacer click en el boton '+'
increment = document.getElementById("increment");
increment.addEventListener("click", incrementFunction);

function incrementFunction() {
// seleccionamos la cantidad y sumamos uno al valor, para luego calcular el total multiplicando la cantidad por el precio
  cantidad = document.querySelector(".cantidad");
  cantidad.innerHTML = Number(cantidad.innerHTML) + 1;
  totalSpan = document.querySelector(".valor-total");
  totalSpan.innerHTML = Number(cantidad.innerHTML) * precio;
}

// llamamos a la funcion decrementFunction al hacer click en el boton '-'
decrement = document.getElementById("decrement");
decrement.addEventListener("click", decrementFunction);

function decrementFunction() {
// seleccionamos la cantidad y revisamos si el valor es menor o igual a cero para no tener numeros negativos, si es un numero positivo restamos uno al valor de la cantidad y calculamos el total multiplicando la cantidad por el precio
  cantidad = document.querySelector(".cantidad");
  if (cantidad.innerHTML <= 0) {
  } else {
    cantidad.innerHTML = Number(cantidad.innerHTML) - 1;
    totalSpan = document.querySelector(".valor-total");
    totalSpan.innerHTML = Number(cantidad.innerHTML) * precio;
  }
}
