var rob = function (nums) {
    let prevStash = 0;
    let currStash = 0;
    let tempStash;
    for (let x of nums) {
        tempStash = currStash;
        currStash = Math.max(x + prevStash, currStash);
        prevStash = tempStash;
    }
    return currStash;
};
console.log(rob([1, 5, 2, 115, 100]));