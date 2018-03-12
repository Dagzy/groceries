module.exports  = function pricePerPound(weight, costPerPound) {
    let cost = weight * costPerPound;
    return cost;
}
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
module.exports =  function memberDiscount(subTotal) {
    let discount = .85;
    newTotal = subTotal * discount
    newTotal *= 100
    newTotal = Math.round(newTotal)
    newTotal /= 100
    return total = newTotal;
}
module.exports = function getTotal() {
    tally()
    if (cardMember) {
        memberDiscount(subTotal);
    }
    console.log('something working')
};