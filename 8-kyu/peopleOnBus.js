var number = function (busStops) {

    var numberOfPeople = 0;

    for (var i = 0; i < busStops.length; i++) {
        numberOfPeople = numberOfPeople + busStops[i][0] - busStops[i][1];
    }

    return numberOfPeople;
}