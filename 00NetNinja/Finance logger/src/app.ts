import { Invoice } from "./classes/Invoice.js";

interface  IsPerson {
    name: string;
    speak(a:string): void
    age: number;
    spend(a: number): number;
}

console.log("first")
const me:IsPerson = {
    name : "nid",
    age : 30 ,
    speak(text:string) : void {
        console.log(text);
    },
    spend(amount:number): number {
            console.log("I spend", amount)
            return amount;
    }
}
  console.log(me)



  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  invoices.push(invTwo);
  
  invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
  })
  
  console.log("first")
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  console.log(form.children);
  
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
  });