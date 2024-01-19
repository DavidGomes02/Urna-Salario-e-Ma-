function calcula(){
    var salarioBruto = Number(document.getElementById("salarioBruto").value);
    var irpf = 0;
    var inss = 7.5;

    if(salarioBruto<=2112){

    }else{
        if(salarioBruto<=2826.65){
            irpf=7.5;
        }else{
            if(salarioBruto<=3751.05){
                irpf=15;
            }else{
                if(salarioBruto<=4664.68){
                    irpf=22.5;
                }else{
                    irpf=27.5;
                }
            }
        }
    }

    if(salarioBruto<=1412){

    }else{
        if(salarioBruto<=2666.68){
            inss=9;
        }else{
            if(salarioBruto<=4000.03){
                inss=12;
            }else{
                inss=14;
            }
        }
    }

    var descontoIRPF = salarioBruto*irpf/100;
    var descontoINSS = salarioBruto*inss/100;
    var salarioLiquido = salarioBruto - (descontoINSS + descontoIRPF);
    document.write("O salário líquido é: "+salarioLiquido+ " " + "INSS: "+descontoINSS+ " " + "IRPF: "+descontoIRPF );
}