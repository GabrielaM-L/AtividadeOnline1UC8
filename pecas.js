/*Sistema de cadastro de peças**** Verifica se é possível cadastrar a peça: lista não ultrapassa 10 itens, 
peso da peça maior que 100g e nome da peça com mais de 3 caracteres:*/

let listaPecas
let peso
let nomePeca

//Atrubuição de valores às variáveis para teste (Falha no peso):

/*listaPecas = ["Freio", "Câmbio", "Farol", "Embreagem", "Amortecedor"];
peso = 90; 
nomePeca = "Seta";*/

//Atrubuição de valores às variáveis para teste (Falha no nome):

/*listaPecas = ["Freio", "Câmbio", "Farol", "Embreagem", "Amortecedor"];
peso = 120; 
nomePeca = "TE";*/

//Atrubuição de valores às variáveis para teste (Falha na quantidade de itens da lista):

/*listaPecas = ["Freio", "Câmbio", "Farol", "Embreagem", "Amortecedor", "Vela", "Bateria", "Radiador", "Ignição", "Virabrequim"];
peso = 120;
nomePeca = "Seta";*/

//Atrubuição de valores às variáveis para teste (sem falha):

/*listaPecas = ["Freio", "Câmbio", "Farol", "Embreagem", "Amortecedor", "Vela", "Bateria", "Radiador"];
peso = 120;
nomePeca = "Seta";*/


if (listaPecas.length < 10) {

    if(peso > 100){

        if (nomePeca.length > 3) {

            console.log("A peça pode ser cadastrada.")
            
        } else {
            
            console.log("O nome da peça não tem a quantidade mínima de caracteres para ser cadastrado.")
        };
        
    } else {
        console.log("A peça não tem o peso mínimo para ser cadastrada.")
    };
    
} else {
    console.log("Não há espaço disponível para cadastro na lista de peças.")
};
