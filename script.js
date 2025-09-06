// Selecciona el elemento con el id "menu-icon" y agrega un evento de clic
document.getElementById("menu-icon").addEventListener("click", function () {
  // Dentro del evento de clic, selecciona el elemento con el id "menu"
  const menu = document.getElementById("menu");

  // Alterna la clase "hidden" en el elemento "menu"
  // Si la clase "hidden" está presente, la elimina; si no está, la agrega
  menu.classList.toggle("hidden");
});

document.getElementById("btn_click").addEventListener("click", function () {
  alert("mensaje");
});

document.getElementById("form_calc").addEventListener("submit", function (e) {
  e.preventDefault();
  const ope1 = parseFloat(document.getElementById("txt_operador1").value);
  const ope2 = parseFloat(document.getElementById("txt_operador2").value);
  const suma = ope1 + ope2;
  document.getElementById("lb_resultado").textContent = "Resultado: " + suma;
});
