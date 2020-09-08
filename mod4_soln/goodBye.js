(function (window) {
    var sayBye = new Object();
    var speakWord = "Good Bye";
    sayBye.speak = function (name) {
        console.log(speakWord + " " + name + "!");
    };
    window.sayBye = sayBye;
})(window);