// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
//  n = 7
// arr = [1, 2, 1, 2, 1, 3, 2]

// There is one pair of color i and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

function sockMerchant(n, ar) {
    let counts = {};
    let count = [];
    let sum = 0;

for(let i = 0; i < ar.length; i++){
let item = ar[i]
 counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
}
count = Object.values(counts);
for(let i = 0; i < count.length; i++){
if(count[i] >= 2){
    sum += Math.floor(count[i]/2)
}
}
return sum;
}