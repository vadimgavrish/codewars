function greet(language) {
    var languagesList = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso"
    }

    if (!(language in languagesList)) {
        return languagesList.english;
    } else {
        var greeting = languagesList[language];
        return greeting;
    }
}

// "return languagesList[language] || languagesList['english']" works better