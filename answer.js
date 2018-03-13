// //Fizz Buzz
// //Write a for loop that counts to 100.
// //For each number that's divisible by 3, print fizz to the console
// //For each number that's divisible by 5, printt buzz to the console
// //For each number that's divisible by both 3 and 5, print FizzBuzz 
// //      to the console
// //For each other number, print just the number to the console
//  (Initializer, Condition, Incrementer)
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// var i = 0;
// for (; i < 9; i++) {
//     console.log(i);
//     // more statements
// }
// for (var i = 0;; i++) {
//     console.log(i);
//     if (i > 3) break;
//     // more statements
//  }
//  var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }









// Write a function that tallies up the total bill on a grocery list. 
//Include calculations for produce by the pound. Calculations for 
//Valued Card member make a transaction, attach a receipt to it, and 
//attach the transaction to a specific category










var subTotal = 0;
var total = 0;
var totalArr = [];
var shopList = [];
var cardMember = true;
var receipt = '';
var grandTotal;
const groceries = {
    banana: {
        name: "banana",
        perPound: .37
    },
    milk: {
        name: "milk",
        cost: 1.89
    },
    chocolate: {
        name: "chocolate",
        cost: 2
    },
    mango: {
        name: "mango",
        cost: .99
    }
};

function addProduct(newProduct, amount) {
    if (!newProduct && !amount) {
        return;
    }
    if (!amount) {
        amount = 1;
    }
    if (newProduct.perPound) {
        totalCost = pricePerPound(newProduct.perPound, amount)
        totalArr.push(totalCost)
        shopList.push(newProduct.name)
    } else {
        let prodCost = newProduct.cost * amount
        totalArr.push(prodCost)
        shopList.push(newProduct.name)

    }
};

function tally() {
    // console.log(totalArr)
    for (let i = 0; i < totalArr.length; i++) {
        const element = totalArr[i];
        subTotal += element;
        total += element;
    }
    for (let i = 0; i < shopList.length; i++) {
        const element = shopList[i];
        receipt += element + " "
    }
}

function pricePerPound(weight, costPerPound) {
    let cost = weight * costPerPound;
    return cost;
}

function memberDiscount(subTotal) {
    let discount = .85;
    newTotal = subTotal * discount
    newTotal *= 100
    newTotal = Math.round(newTotal)
    newTotal /= 100
    console.log('after discount', newTotal)
    return total = newTotal;
}
function addTax(total) {
    taxVal = total * .07
    taxVal *= 100;
    // console.log('taxval1',taxVal)
    taxVal = Math.floor(taxVal)
    // console.log('taxVal floored',taxVal)
    taxVal /= 100;
    // console.log('taxval2', taxVal)
    grandTotal = total + taxVal;
    grandTotal *= 100;
    grandTotal = Math.floor(grandTotal)
    // console.log(grandTotal)
    grandTotal /= 100
    console.log('gt', grandTotal)
    // total = grandTotal
    console.log('before return',total)
    return grandTotal;
}

function getTotal() {
    tally()
    if (cardMember) {
        memberDiscount(subTotal);
    }
    addTax(total)
    total = grandTotal;
}

addProduct(groceries.milk);
addProduct(groceries.banana, 5);
addProduct(groceries.mango, 10);
addProduct(groceries.chocolate);
getTotal();
console.log('Your total before taxes and discounts was:', subTotal, 'Your total after taxes and discounts is:', total)
console.log('You purchased:', receipt)