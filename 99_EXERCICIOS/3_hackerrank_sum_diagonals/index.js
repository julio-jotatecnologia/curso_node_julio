'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let diagA = []
    let diagB = []
    let d1 = 0
    let d2 = 0
    let dif = 0
    let n = arr.length; 
    
    for( let i=0; i<arr.length; i++ ){
        for( let j=0; j<arr.length; j++){
            //console.log('I: '+i+' J: '+j+' Valor: '+arr[i][j]+'<br>')
            // finding the sum of primary diagonal
            if(i === j) {
                d1 += arr[i][j];
            }
            // finding the sum of secondary diagonal
            if(i + j === n - 1){
                d2 += arr[i][j];
            }
        }
    }
    let sumA = diagA.reduce((accumulator,value) => accumulator + value,0);
    let sumB = diagB.reduce((accumulator,value) => accumulator + value,0);
    dif = Math.abs(d1 - d2)
    
    return dif
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
