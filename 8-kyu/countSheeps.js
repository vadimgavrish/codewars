function countSheeps(arrayOfSheep) {

    var sheep = 0;

    for (i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheep++;
        }
    }
    
    return sheep;
}

var arr = [true, true, true, false,
      true, true, true, true,
      true, false, true, false,
      true, false, false, true,
      true, true, true, true,
      false, false, true, true];

var result = countSheeps(arr);

console.log(result);