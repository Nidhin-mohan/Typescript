const score: Array<number> = [];

const names:Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(value: any): any{
    return value
}

function identityTree<Type>(val:Type): Type {
    return val
}

identityTree("");

 function identityFour<T>(val: T): T{
    return val
 }

 interface Bootle{
    brand: string,
    type: number,
 }

//  identityFour<Bootle>({})

function getSerchProducts<T>(products: T[]):T{
    // bbla blla
    const myIndex = 3
    return products[myIndex];
}

const getMoreSerchProducts = <T>(products: T[]): T=> {
    //opifjviojae
    const myData=  3;
    return products[myData]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U):object{
 return{
    val1,
    val2
 }
} 

anotherFunction(3 , {});

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] =[];

    addToCart(products: T){
        this.cart.push(products)
    }
}