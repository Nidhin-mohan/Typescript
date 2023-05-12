//classes }

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a:number){
        this.client = c  ;
        this.details = d ;
        this.amount = a;
        
    }

    format(){
        return `${this.client}  owes #{this.amount} for ${this.details}`
    }


}


const invOne = new Invoice( 'mario', 'work on website', 25)
const invTwo = new Invoice( 'Nidhin', 'work on website', 25)


console.log(invOne, invTwo)

let invoice : Invoice[] =[];
invoice.push(invOne)
invoice.push(invTwo)


console.log("first")
console.log(invoice)








const anchor = document.querySelector('a')

if(anchor){
    console.log(anchor.href)
}

console.log(anchor?.href)

const form = document.querySelector(`form`) as  HTMLFormElement

console.log(form.children)

const type = document.querySelector("#type") as  HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as  HTMLInputElement
const details = document.querySelector("#details") as  HTMLInputElement
const amount = document.querySelector("#amount") as  HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
     console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber ,
     );
})

