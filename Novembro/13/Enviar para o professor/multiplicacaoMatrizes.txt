function multiplicacaoMatrizes(matriz1, matriz2) {
    if (matriz1[0].length !== matriz2.length) {
        return "As matrizes não podem ser multiplicadas. O número de colunas de matriz1 não corresponde ao número de linhas de matriz2.";
    }

    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        const linha = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            let valor = 0;
            for (let k = 0; k < matriz2.length; k++) {
                valor += matriz1[i][k] * matriz2[k][j];
            }
            linha.push(valor);
        }
        resultado.push(linha);
    }
    return resultado;
}

const matrizC = [[1, 2, 3], [4, 5, 6]];
const matrizD = [[7, 8], [9, 10], [11, 12]];
const resultadoMultiplicacao = multiplicacaoMatrizes(matrizC, matrizD);
console.log(resultadoMultiplicacao);