(function () {
    var names = ["Sid", "Jon", "Jonas", "Nick", "Kevin", "Jack", "Smith", "Jason"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            sayBye.speak(names[i]);  
        } else {
            sayHello.speak(names[i]);
        }
    }
})();