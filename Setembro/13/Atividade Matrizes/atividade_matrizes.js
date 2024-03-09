function transporMatriz(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    const matrizTransposta = [];

    for (let j = 0; j < colunas; j++) {
        const novaLinha = [];
        for (let i = 0; i < linhas; i++) {
            novaLinha.push(matriz[i][j]);
        }
        matrizTransposta.push(novaLinha);
    }

    return matrizTransposta;
}

const matrizOriginal = [[1, 2, 3], [4, 5, 6]];
const matrizTransposta = transporMatriz(matrizOriginal);
console.log(matrizTransposta); // Deve imprimir: [[1, 4], [2, 5], [3, 6]]