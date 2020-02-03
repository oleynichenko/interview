class Man {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('Hello! I am ' + this.name);
        return 'Hello! I am ' + this.name;
    }
}
const worker = new Man('Jhon');
worker.say();
