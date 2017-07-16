function find_average(array) {

    var sum = 0;
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        sum  = sum + array[i];
        counter++;
    }

    var result = sum / counter;
    return result;
}