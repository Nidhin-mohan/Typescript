let greet : Function

 greet = () => {
    console.log("first")
};

// greet = "hello"

const add = (a: number, b: number, c : number  = 10) : void => {
  console.log(a+b+c)
}

add(3,7,89);


const minus = (a:number, b:number) : number => {
    return a+b;
}

let result = minus(10,7)
// result = "some"

