function  votar(){

    var totalDeEleitores = Number(document.getElementById("totalDeEleitores").value);

    var votosBrancos = Number(document.getElementById("votosBrancos").value);

    var votosNulos = Number(document.getElementById("votosNulos").value);

    var votosValidos = Number(document.getElementById("votosValidos").value);
    
    
    var porcentagemVotosBrancos =((votosBrancos/totalDeEleitores)*100);
    document.write("Porcentagem de Votos Brancos: " + porcentagemVotosBrancos);

    var porcentagemVotosNulos =((votosNulos/totalDeEleitores)*100);
    document.write("Porcentagem de Votos Brancos: " + porcentagemVotosNulos);

    var porcentagemVotosValidos =((votosValidos/totalDeEleitores)*100);
    document.write("Porcentagem de Votos Brancos: " + porcentagemVotosValidos);
    

    if (totalDeEleitores == (votosBrancos + votosNulos + votosValidos)){
        document.write("Número total de eleitores: " +totalDeEleitores);

        }else{
        document.write("Eleições anuladas"); 
    }
}   