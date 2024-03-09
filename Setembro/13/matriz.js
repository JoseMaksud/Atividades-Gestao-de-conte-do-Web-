const matrizA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const matrizB = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
];

const matrizSoma = [];

const matrizSub = [];

for (var i = 0; i < matrizA.length; i++) {
    const linha = [];
    for (var j = 0; j < matrizA.length; j++) {
        linha.push(matrizA[i][j] + matrizB[i][j]);
    }
    matrizSoma.push(linha);
}

for (var i = 0; i < matrizA.length; i++) {
    const linha = [];
    for (var j = 0; j < matrizA.length; j++) {
        linha.push(matrizA[i][j] - matrizB[i][j]);
    }
    matrizSub.push(linha);
}

console.log("Soma Matrizes");
console.table(matrizSoma);
console.log("Subtração Matrizes");
console.table(matrizSub);