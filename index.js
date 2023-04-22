const mostrarFormulario = () => {
  var forma = document.getElementById("forma").value;
  var formulario = document.getElementById("formulario");
  formulario.innerHTML = "";
  switch (forma) {
    case "circulo":
      formulario.innerHTML = `
          <label for="radio">Radio:</label>
          <input type="number" id="radio" required>
          <img src="img/circulo.png" alt="ciruclo">
        `;
      break;
    case "esfera":
      formulario.innerHTML = `
          <label for="radio">Radio:</label>
          <input type="number" id="radio" required>
          <img src="img/esfera.png" alt="esfera">
        `;
      break;
    case "triangulo":
      formulario.innerHTML = `
          <label for="base">Base:</label>
          <input type="number" id="base" required>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" required>
          <img src="img/triangulo.png" alt="triangulo">
        `;
      break;
    case "piramide":
      formulario.innerHTML = `
          <label for="base">Base:</label>
          <input type="number" id="base" required>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" required>
          <img src="img/piramide.jpeg" alt="piramide">
        `;
      break;
    case "cubo":
      formulario.innerHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" required>
          <img src="img/cubo.jpeg" alt="cubo">
        `;
      break;
    case "cuadrado":
      formulario.innerHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" required>
          <img src="img/cuadrado.png" alt="cuadrado">
        `;
      break;
    default:
      formulario.innerHTML = "";
      break;
  }
};
const calcular = () => {
  var forma = document.getElementById("forma").value;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  switch (forma) {
    case "circulo":
      var radio = document.getElementById("radio").value;
      var area = Math.PI * Math.pow(radio, 2);
      var mensaje = `El área del círculo es: ${area.toFixed(2)}`;
      resultado.innerHTML = `<p>${mensaje}</p>`;
      break;
    case "cuadrado":
      var lado = document.getElementById("lado").value;
      var area = lado * lado;
      var mensaje = `El area del cuadrado es: ${area.toFixed(2)}`
      resultado.innerHTML = `<p>${mensaje}</p>`;
      break;
    case "cubo":
      var lado = document.getElementById("lado").value;
      var area = 6 * Math.pow(lado, 2);
      var volumen = Math.pow(lado, 3);
      var mensaje = `El area del cubo es: ${area.toFixed(2)}. y el volumen del cubo es: ${volumen.toFixed(2)}`
      resultado.innerHTML = `<p>${mensaje}</p>`;
      break;
    case "triangulo":
      var base = document.getElementById("base").value;
      var altura = document.getElementById("altura").value;
      var area = (base * altura) / 2;
      var mensaje = `El área del triángulo es: ${area.toFixed(2)}`;
      resultado.innerHTML = `<p>${mensaje}</p>`;
      break;
    case "esfera":
      var radio = document.getElementById("radio").value;
      var area = 4 * Math.PI * Math.pow(radio, 2);
      var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
      var mensaje = `El área de la esfera es: ${area.toFixed(
        2
      )}. El volumen de la esfera es: ${volumen.toFixed(2)}.`;
      resultado.innerHTML = `<p>${mensaje}</p>`;
      break;
    case "piramide":
      var base = document.getElementById("base").value;
      var altura = document.getElementById("altura").value;
      var volumen = (((base * base) * altura ) /3);
      var mensaje = `El area de la piramide es: ${volumen.toFixed(2)}`;
      resultado.innerHTML = `<p>${mensaje}</p>`
  }
};
