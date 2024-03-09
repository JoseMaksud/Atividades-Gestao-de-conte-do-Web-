function determinanteMatrizes2x2(matriz) {
    if (matriz.length !== 2 || matriz[0].length !== 2) {
        return "A matriz não é 2x2.";
    }
    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
}

const matrizE = [[1, 2], [3, 4]];
const determinante = determinanteMatrizes2x2(matrizE);
console.log(determinante);