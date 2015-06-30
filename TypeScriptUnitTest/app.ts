/// <reference path="calculationstests.ts" />
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);


		//test

		var test = new tsUnit.Test(CalculationsTest);

		var result = test.run();

		var outcome = (result.errors.length === 0) ? 'Test Passd' : 'Test Failed';

		console.log('成功:' + result.passes.length);
		console.log('失敗:' + result.errors.length);

    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};