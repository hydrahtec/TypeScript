class Greeter {
    constructor(public greeting: string) {}
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

let greeter = new Greeter("Hello World!!");

let str = greeter.greet();

document.body.innerHTML = str;