function calcularSoma() {
    const a = [];
    const b = [];
    const resultado = [];

    // Ler valores da matriz A
    for (let i = 1; i <= 3; i++) {
        a[i] = [];
        for (let j = 1; j <= 3; j++) {
            a[i][j] = parseFloat(document.getElementById('a' + i + j).value);
        }
    }

    // Ler valores da matriz B
    for (let i = 1; i <= 3; i++) {
        b[i] = [];
        for (let j = 1; j <= 3; j++) {
            b[i][j] = parseFloat(document.getElementById('b' + i + j).value);
        }
    }

    // Calcular a soma das matrizes
    for (let i = 1; i <= 3; i++) {
        resultado[i] = [];
        for (let j = 1; j <= 3; j++) {
            resultado[i][j] = a[i][j] + b[i][j];
        }
    }

    // Exibir o resultado na tabela
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            document.getElementById('r' + i + j).textContent = resultado[i][j];
        }
    }
}

function calcularSubtracao() {
    const a = [];
    const b = [];
    const resultado = [];

    // Ler valores da matriz A
    for (let i = 1; i <= 3; i++) {
        a[i] = [];
        for (let j = 1; j <= 3; j++) {
            a[i][j] = parseFloat(document.getElementById('a' + i + j).value);
        }
    }

    // Ler valores da matriz B
    for (let i = 1; i <= 3; i++) {
        b[i] = [];
        for (let j = 1; j <= 3; j++) {
            b[i][j] = parseFloat(document.getElementById('b' + i + j).value);
        }
    }

    // Calcular a subtração das matrizes
    for (let i = 1; i <= 3; i++) {
        resultado[i] = [];
        for (let j = 1; j <= 3; j++) {
            resultado[i][j] = a[i][j] - b[i][j];
        }
    }

    // Exibir o resultado na tabela
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            document.getElementById('r' + i + j).textContent = resultado[i][j];
        }
    }
}