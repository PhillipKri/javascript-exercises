const sumAll = function(num, num2) {
    if(typeof num != 'number' || typeof num2 != 'number'){
        return 'ERROR';
    }
    if(num < 1 || num2 < 1){
        return 'ERROR'
    }
    if(num % 1 != 0 || num2 % 1 != 0){
        return 'ERROR'
    }
    if(num > num2){
        let sum = 0;
        while(num >= num2){
            sum += num2;
            num2++;
        }
        return sum;
    } else {
        let sum = 0;
        while(num <= num2){
            sum += num;
            num++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
