// Dynamic Array

// 2D Array - DS

// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// An hourglass in A is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, 
// then print the maximum hourglass sum. The array will always be 6 x 6.

// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum
// Input Format

// Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

// Constraints
// . -9 <= arr[i][j]  <= 9
// . 0 <= i,j <=  5

// Output Format

// Print the largest (maximum) hourglass sum found in arr


// Complete the hourglassSum function below.


function hourglassSum(arr) {
    let pairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
            if (arr[i][x + 2] !== undefined) {
                pairs.push([
                    arr[i][x],
                    arr[i][x + 1],
                    arr[i][x + 2]
                ])
            }
        }
    }
    for (let a = 0; a < pairs.length; a++) {
        if (pairs[a + 4] && pairs[a + 8]) {
            let second = pairs[a + 4][1]
            pairs[a] = pairs[a].concat(second, pairs[a + 8])
        }
    }
    let outersum = [];
    for (let b = 0; b < pairs.length; b++) {
        if (pairs[b].length > 3) {
            outersum.push({ pairs: pairs[b], pair: pairs[b].reduce((a, b) => (parseInt(a) + parseInt(b))), index: b })
        }
    }
    var maximum = outersum.reduce((a, b) => a.pair > b.pair ? a : b)
    return maximum.pair
}