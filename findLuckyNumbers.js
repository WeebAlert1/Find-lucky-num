// Write your code below this line.
function findLuckyNum(n) {
    let possiblenum = [1,2,3,4,5,6,7,8,9,10];
    let luckynum = [];
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * possiblenum.length);
        luckynum.push(possiblenum[x])
        possiblenum.splice(x, 1)
    }
    return luckynum
}

console.log(findLuckyNum(6))