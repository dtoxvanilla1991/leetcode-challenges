var isPowerOfTwo = function(n) {
    if(n == 0){
        return 0;
    }
    while (n!=1){
        if(n%2 != 0){
            return false;
        }
        n/=2;
    }
    return true;

};
isPowerOfTwo(6)

//second option:
var isPowerOfTwo = function(n) {
    {
            if (n == 0)
                return false;
     
            return parseInt( (Math.ceil((Math.log(n) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(n) / Math.log(2))))));
        }
    };