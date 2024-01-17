function calcularSalarioLiquido() {
    // Obter o salário bruto informado pelo usuário
    var salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    // Calcular desconto de INSS
    var inssDesconto = calcularINSS(salarioBruto);

    // Calcular desconto de IRPF
    var irpfDesconto = calcularIRPF(salarioBruto - inssDesconto);

    // Calcular salário líquido
    var salarioLiquido = salarioBruto - inssDesconto - irpfDesconto;

    // Exibir resultado
    document.getElementById('resultado').innerHTML = "Salário Líquido: R$ " + salarioLiquido.toFixed(2);
}

function calcularINSS(salarioBruto) {
    // Implementar cálculo de INSS conforme a legislação vigente
    if (salarioBruto <= 1412) {
        return salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        return salarioBruto * 0.09;
    } else if (salarioBruto <= 4000) {
        return salarioBruto * 0.12;
    } else if (salarioBruto <= 7786) {
        return salarioBruto * 0.14;
    } else {
        return 7786 * 0.14;
    }
}

function calcularIRPF(salarioDescontadoINSS) {
    // Implementar cálculo de IRPF conforme a legislação vigente
    if (salarioDescontadoINSS <= 2112) {
        return 0;
    } else if (salarioDescontadoINSS <= 2826) {
        return (salarioDescontadoINSS - 2112) * 0.075;
    } else if (salarioDescontadoINSS <= 3751) {
        return (2826 - 2112) * 0.075 + (salarioDescontadoINSS - 2826) * 0.15;
    } else if (salarioDescontadoINSS <= 4664) {
        return (2826 - 2112) * 0.075 + (3751 - 2826) * 0.15 + (salarioDescontadoINSS - 3751) * 0.23;
    } else {
        return (2826 - 2112) * 0.075 + (3751 - 2826) * 0.15 + (4664 - 3751) * 0.23 + (salarioDescontadoINSS - 4664) * 0.27;
    }
}