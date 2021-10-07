// Electronic Shop

// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. 
// Given price lists for keyboards and USB drives and a budget,
//  find the cost to buy them. If it is not possible to buy both items, return -1.


// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or  -1 if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
    let cost = [];
    for(let keyboard of keyboards){
            for(let usb of drives){

                if(keyboard + usb <= b){
                    cost.push(keyboard+usb)
                }else {
                    if(cost.length == 0){
                        cost.push(-1)
                    }
                }
            }
    }
        cost.sort((a, b) => a - b);
        return cost[cost.length - 1]

}