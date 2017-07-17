// return masked string
function maskify(cc) {

    if (cc.length <= 4) {

        return cc;
    } else {

        var retain = cc.slice(-4);
        var hashAmount = cc.length - 4;
        var hash = '#';

        for (var i = 1; i < hashAmount; i++) {
            hash += '#';
        }

        return hash.concat(retain);
    }
}

// cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);