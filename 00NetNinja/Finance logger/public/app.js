"use strict";
// import { Invoice}  from './classes/invoice'
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./classes/Invoice");
const invOne = new Invoice_1.Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice_1.Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
console.log("first");
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
