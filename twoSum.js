// var twoSum = function (nums, target) {
//     let numsCopy = [...nums];
//     let arr = [];
//     let answer = [];
//     while (arr.length == 0) {
//         let oneIndice = numsCopy.shift();
//         for (let twoIndice of numsCopy) {
//             if (twoIndice + oneIndice == target) {
//                 arr = [oneIndice, twoIndice];
//                 break;
//             }
//         }
//     }
//     arr.forEach(indice => {

//         let found = nums.findIndex((num, index) => num == indice);
//         nums[found] = 'used';
//         answer.push(found);
//     });
//     return answer;
// };
// console.log(twoSum([3, 3], 6));

var twoSum = function (nums, target) {
    var newarr = [];
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                newarr.push(i);
                newarr.push(j);
                break;
            }
        }
    }
    return newarr;
};
console.log(twoSum([2, 5, 4, 14, 141, 7], 143));