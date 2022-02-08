var mergeTrees = function(root1, root2) {
     let answer = [];
    if(root1.length > root2.length) {
        
        root1.map((n,i) => {
            root2[i] != null ? answer.push(n+=root2[i]) :answer.push(n);
        });
        console.log(root1)
        return root1;
    }else {
        root2.map((n,i) => {
            root1[i] != null ? answer.push(n+=root1[i]) :answer.push(n);
        });
        console.log(answer)
        return answer;
    }
};
mergeTrees([1,3,2,5], [2,1,3,null,4,null,7]) // [3,4,5,5,4,null,7]