function detectType(val: number| string){
    if(typeof val === "string"){
       return val.toLowerCase()
    }

     return val + 3;
   
}

function provideId(id: string){
    if(!id){
        console.log("please provide id");
        return
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null) {

  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
    name: string,
    email: string,
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin 
    }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
// (parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
// (parameter) x: string
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void };


function isFish(pet: Fish | Bird): pet is Fish{
 return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "fish food"
  } else {
    pet
    return "bird Food"
  }
}

interface Circle {
  kind: "circle" 
  radius: number;
  
}

interface square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind : "rectangle",
  length : number,
  width : number,
}

type Shape = Circle | square 

function getShape(shape: Shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2;
  }
  return  shape.sideLength * shape.sideLength
}


function getArea(shape: Shape){
  switch(shape.kind){
    case "circle":
          return Math.PI * shape.radius ** 2;
    case "square":
     return shape.sideLength * shape.sideLength;
    default:
      const _defaultForShape : never = shape
      return _defaultForShape
       
  }
}