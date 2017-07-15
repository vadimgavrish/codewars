function friend(friends) {
    
    var amountOfFriends = [];
    
    for (i = 0; i < friends.length; i++) {    
        if (friends[i].length == 4) {
            amountOfFriends.push(friends[i]);
        }
    }
    
    return amountOfFriends;
}