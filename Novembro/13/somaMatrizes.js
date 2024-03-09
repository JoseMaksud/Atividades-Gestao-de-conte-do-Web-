function somaMatrizes(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return "As matrizes não podem ser somadas. Elas têm dimensõeds diferentes.";
    }

    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        const linha = [];
        for (let j = 0; j < matriz1[0].length; j++) {
            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}

const matrizA = [[1, 2], [3, 4]];
const matrizB = [[5, 6], [7, 8]];
const resultadoSoma = somaMatrizes(matrizA, matrizB);
console.log(resultadoSoma);