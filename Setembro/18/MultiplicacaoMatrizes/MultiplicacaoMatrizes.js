// Duas matrizes A e B
const A = [[1, 2], [3, 4]];
const B = [[1, 0], [0, 1]];


function multiplicarMatrizes(matriz1, matriz2) {
    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        const linha = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matriz1[i].length; k++) {
                soma += matriz1[i][k] * matriz2[k][j];
            }
            linha.push(soma);
        }
        resultado.push(linha);
    }
    return resultado;
}

const resultado = multiplicarMatrizes(A, B);
console.log(resultado);