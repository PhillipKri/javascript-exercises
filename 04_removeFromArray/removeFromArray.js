const removeFromArray = function(array, ...args) {
    return array.filter((obj) => {
        if(args.indexOf(obj) === -1){
            return obj;
        }
        
    })
};

// Do not edit below this line
module.exports = removeFromArray;
