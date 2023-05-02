// https://exercism.org/tracks/typescript/exercises/matrix/edit

// Given a string representing a matrix of numbers, return the rows and columns of that matrix.

// sample input: '1 2 3\n4 5 6\n7 8 9\n8 7 6'
// rows output : [[1,2,3], [4,5,6], [7,8,9]]
// columns output : [[1,4,7], [2,5,8], [3,6,9]]

export class Matrix {
    input: string[]
    private matrix: number[][]
    constructor(input: string) {
        this.input = input.split('\n')
        const rows = this.input.map((item, index) => {
            return item.split(' ').map(Number); 
        });

        // Check that all rows have the same length
        const rowLengths = rows.map((row) => row.length);
        const uniqueRowLengths = new Set(rowLengths);
        if (uniqueRowLengths.size > 1) {
            throw new Error("All rows in the matrix must have the same length");
        }

        this.matrix = rows;
    }

    get rows():number[][] {
        return this.matrix;
    }

    get columns():number[][] {
        const firstRow = this.matrix[0] ?? [];
        return firstRow.map((_, rowIndex) => {
            return this.matrix.map((_, colIndex) => {
                return this.matrix[colIndex][rowIndex];
            })
        })
    }
}
  