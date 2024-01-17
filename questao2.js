function calcularCusto(){
var quantidade = document.getElementById("quantidade").value;
quantidade = parseInt(quantidade);
if (quantidade < 12) {
    var custoTotal = quantidade * 1.3;
} else 
var custoTotal = quantidade * 1.0;
var resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML = "O custo total da compra é R$ " + custoTotal.toFixed(2);
}
