function isSquareMatrix(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;
    return rowsCount === columnsCount ? rowsCount : 0;
}

function isRegularMatrix(matrix) {
    const columnsCount = matrix[0].length;
    return matrix.some(row => row.length !== columnsCount);
}

function determinantRecursive(matrix, maxIterations) {
    if (maxIterations === 1) return matrix[0][0];

    let determinant = 0
    let signal = 1;

    for (let i = 0; i < maxIterations; i++) {
        let submatrix = createSubmatrix(matrix, i, maxIterations);
        determinant += signal * matrix[0][i] * determinantRecursive(submatrix, maxIterations - 1);
        signal = -signal;
    }
    return determinant;
}

function createSubmatrix(matrix, colToRemove, maxIterations) {
    let submatrix = [];
    for (let i = 1; i < maxIterations; i++) {
        let newRow = []
        for (let j = 0; j < maxIterations; j++) {
            if (j !== colToRemove) {
                newRow.push(matrix[i][j]);
            }
        }
        submatrix.push(newRow);
    }
    return submatrix;
}


export function determinant(matrix) {
    if (matrix.length === 0 || !Array.isArray(matrix)) return "Don't available to determine matrix";
    if (isRegularMatrix(matrix)) return "Isn't a regular matrix";
    if (isSquareMatrix(matrix) === 0) return "Isn't a square matrix";

    const maxIterations = isSquareMatrix(matrix);
    return determinantRecursive(matrix, maxIterations);

}