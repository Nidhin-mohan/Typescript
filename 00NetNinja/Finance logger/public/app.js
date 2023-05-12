"use strict";
//classes }
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client}  owes #{this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on website', 25);
const invTwo = new Invoice('Nidhin', 'work on website', 25);
console.log(invOne, invTwo);
let invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
console.log("first");
console.log(invoice);
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector(`form`);
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
