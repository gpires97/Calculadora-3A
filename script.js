// Função que realiza o cálculo com base nos valores inseridos pelo usuário
function calcular() {
    // Obtém os valores inseridos pelo usuário e converte para número
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Obtém a operação selecionada pelo usuário
    let operacao = document.getElementById("operacao").value;
    
    // Variável que armazenará o resultado do cálculo
    let resultado;

    // Verifica se os números inseridos são válidos 
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Erro! Insira números válidos.";
    } else {
        // Realiza a operação com base na opção selecionada
        switch (operacao) {
            case "+": 
                resultado = num1 + num2; 
                break;
            case "-": 
                resultado = num1 - num2; 
                break;
            case "*": 
                resultado = num1 * num2; 
                break;
            case "/": 
                resultado = num2 !== 0 ? num1 / num2 : "Erro! Divisão por zero."; 
                break;
        }
    }

    // Atualiza o conteúdo do elemento de resultado na página
    document.getElementById("resultado").textContent = resultado;
}
