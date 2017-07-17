function find_average (array) {

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum  = sum + array[i];
    }

    var result = sum / array.length;
    return result;
}

console.log(find_average([1,2,3,4,5]));