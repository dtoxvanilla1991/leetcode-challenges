// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 

// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//THIS WORKS:
//  var twoSum = function(numbers, target) {
    
//     //set variables:
//     let index1 = 0;
//     let index2 = 0;

//     //loop over each el of array:
//     numbers.forEach((n, i) => {

//         //nest another forEach to see where sum adds properly:
//         for(let n2 of numbers){
//             if(n != n2 && n + n2 == target){
//                 index1 = i;
//                 index2 = numbers.findIndex(el => el == n2);
//                 break;
//             }
//         }
//     });
//     const answer = [index1+1, index2+1].sort();
//     console.log(answer);

// };
//SOLVED:
// twoSum([2,7,11,15], 9); //[1,2] The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// twoSum([2,3,4], 6);
// var twoSum = function(numbers, target) {
    
//     //set variables:
//     let index1 = 0;
//     let index2 = 0;

//     //loop over each el of array:
//     numbers.forEach((n, i) => {
//         //nest another forEach to see where sum adds properly:
//         for(let j=i+1; j<= numbers.length-1; j++){
//             if(n + numbers[j] == target){
//                 index1 = i;
//                 index2 = j;
//             }
//         }
//     });
//     const answer = [index1+1, index2+1];
//     answer.sort((a,b) => a - b);
//     console.log(answer);
//     return answer;

// };
var twoSum = function(numbers, target) {
    const seen = {};
    for (let i = 0; i < numbers.length; i++) {
        const needed = seen[target - numbers[i]];
        if (needed !== undefined) {
            return [needed + 1, i + 1];
        }
        seen[numbers[i]] = i;
    }
};
twoSum([2,3,4], 6);
twoSum([0,0,3,4], 0); //[1,2]