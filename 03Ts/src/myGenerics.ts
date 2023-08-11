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

 identityFour<Bootle>({})