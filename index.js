function convertFarToCelsius(inputInFar){
    var result = "";

    if (typeof(inputInFar) !== "number" && typeof(inputInFar) !== "string"){
        if (Array.isArray(inputInFar) === true){
            var errorReport = JSON.stringify(inputInFar) + ' is not a valid number but a/an array';
        } else {
            var errorReport = JSON.stringify(inputInFar) + ' is not a valid number but a/an ' + typeof(inputInFar);
        }
        console.log(errorReport);
        return errorReport;

    } else { 
        if (isNaN(parseFloat(inputInFar))) {
            return inputInFar + ' is not a valid number but a string'
        } else {
            result = ((parseFloat(inputInFar) - 32) * 5/9).toFixed(4);        
            console.log(result)
            return result;
        }
    }
}


function checkYuGiOh(n){
    var newList = [];
    

    if (typeof(n) !== 'number'){
        return n + ' is not a valid integer'
    } else for (let i = 1; i <= n; i++){
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
            newList.push('yu-gi-oh')
        } else if (i % 3 == 0 && i % 5 == 0) {
            newList.push('gi-oh')
        } else if (i % 2 == 0 && i % 5 == 0) {
            newList.push('yu-oh')
        } else if (i % 2 == 0 && i % 3 == 0) {
            newList.push('yu-gi')
        } else if (i % 5 == 0) {
            newList.push('oh')
        } else if (i % 3 == 0) {
            newList.push('gi')
        } else if (i % 2 == 0) {
            newList.push('yu')
        } else {
            newList.push(i);
        }
    }
    return newList;
}

