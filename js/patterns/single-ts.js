var Singleton = /** @class */ (function () {
    function Singleton() {
        this.foo = 123;
    }
    Singleton.getInstance = function () {
        return Singleton._instance;
    };
    Singleton._instance = new Singleton;
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
