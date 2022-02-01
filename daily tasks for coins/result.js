function solution(A) {
    if(A.length === 1){
        return A[0] > 0 ? A[0] : 1;
    }
    let result;
    let temp = 0;
    A.sort();
    A.forEach((n,i) => {
        if(A[i] + 1 != A[i+1] && A[i] != A[i+1]){
            temp = n+1;
        }
        if(!result){
            result = temp;
        }else {
            result < temp ? result == result : result == temp;
        }
    });
    console.log(A);

    if(result <= 0){
        result = 1;
    }
    console.log(result)
    return result;
}
solution([1, 3, 6, 4, 1, 2]);