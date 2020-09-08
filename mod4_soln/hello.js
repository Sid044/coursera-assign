(function (window) {
    var sayHello = new Object();
    var speakWord = "Hello";
    sayHello.speak = function (name) {
        console.log(speakWord + " " + name + "!");
    };
    window.sayHello = sayHello;
})(window);