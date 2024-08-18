const repeatString = function(s,n) {
let i = '';
if(Math.sign(n) === -1 ){
    return 'ERROR';
}

while(n){
    i += s;
    n--;
}
return i;
};

// Do not edit below this line
module.exports = repeatString;
