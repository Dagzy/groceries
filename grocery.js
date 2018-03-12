// Write a function that tallies up the total bill on a grocery list. Include
// calculations for produce by the pound. Calculations for Valued Card member
var subTotal = 0;
var total = 0;
var totalArr = [];
var shopList = [];
var cardMember = false;
var receipt = '';
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
function htmlAdd(e){
    preventDefault(e)
    e.preventDefault();
    console.log(e)
    // element = 
    // addProduct()
}
function addProduct(newProduct, amount) {
    if(!newProduct && !amount){
        return;
    }
    if(!amount){
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
    for (let i = 0; i < totalArr.length; i++) {
        const element = totalArr[i];
        subTotal += element;
    }
    for (let i = 0; i < shopList.length; i++) {
        const element = shopList[i];
        receipt += element + " "
    }
}

function setMember(){
    cardMember = true;
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
    return total = newTotal;
}

function getTotal() {
    tally()
    if (cardMember) {
        memberDiscount(subTotal);
    }
    console.log('something working')
}
function getVal(){
    getTotal()
    myVal = document.getElementById('groceryVal')
    myVal.innerText = total 
    console.log(myVal.innerText)
}
