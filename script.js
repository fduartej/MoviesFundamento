// Selecciona el elemento con el id "menu-icon" y agrega un evento de clic
document.getElementById("menu-icon").addEventListener("click", function () {
  // Dentro del evento de clic, selecciona el elemento con el id "menu"
  const menu = document.getElementById("menu");

  // Alterna la clase "hidden" en el elemento "menu"
  // Si la clase "hidden" está presente, la elimina; si no está, la agrega
  menu.classList.toggle("hidden");
});

document
  .getElementById("calculadora-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const ope1 = parseFloat(document.getElementById("txt_operador1").value);
    const ope2 = parseFloat(document.getElementById("txt_operador2").value);

    const operacion = document.getElementById("sel_operacion").value;
    let calculo = 0.0;
    if (operacion == "+") {
      calculo = ope1 + ope2;
    } else if (operacion == "-") {
      calculo = ope1 - ope2;
    } else if (operacion == "*") {
      calculo = ope1 * ope2;
    } else if (operacion == "/") {
      if (ope2 != 0) calculo = ope1 / ope2;
    }
    console.log("Calculo:" + calculo);
    document.getElementById("lb_resultado").textContent =
      "Resultado: " + calculo;
    alert("Hola Mundo");
  });
