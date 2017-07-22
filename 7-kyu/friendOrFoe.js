function friend(friends) {
    
    var myFriends = [];
    
    friends.forEach(function(element) {
        if (element.length == 4) {
            myFriends.push(element);
        }
    });
    
    return myFriends;
}