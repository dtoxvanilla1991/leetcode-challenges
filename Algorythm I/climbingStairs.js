// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    let one = 1, two = 1;
    for(i=1;i<=n-1;i++){
        let temp = one;
        one+= two;
        two=temp;
    }
    console.log(one)
    return one;
};
climbStairs(3)