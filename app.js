function calcularResultado() {
  // Obtém os valores das entradas
  var B4 = parseFloat(document.getElementById("creatinina").value);
  var B5 = parseInt(document.getElementById("idade").value);
  var B6 = document.getElementById("genero").value;

  // Calcular os valores de B7, B8 e B9 com base em B6
  var B7 = (B6 === "M") ? 0.9 : 0.7;
  var B8 = (B6 === "M") ? -0.302 : -0.241;
  var B9 = (B6 === "M") ? 1 : 1.012;

  // Calcular o resultado
  var resultado = 142 * (Math.pow(Math.min(B4 / B7, 1), B8) * Math.pow(Math.max(B4 / B7, 1), -1.2) * Math.pow(0.9938, B5) * B9);

  // Exibir o resultado na página
  document.getElementById("resultado").textContent = resultado.toFixed(2);
}

// Adicionar evento de clique no botão "Calcular"
document.getElementById("calcularBtn").addEventListener("click", calcularResultado);

