const User = {
    name: 'hitesh',
    email: "hitesh",
    isActive: true,
}

function createUser1({name: string, isPaid: boolean}){

}

createUser1({name: "noidhion", isPaid: false,});
 
let newUser = {name: "hitesh", isPaid: false, email: "A@fgmail"}

createUser1(newUser)

function createCourse(): { name: string; isPaid: boolean } {
  return {name: 'react', isPaid: true};
}



type User = {
    readonly _id?: string;
    name: string;
    email: string;
    isActive: boolean;

}

type Mystring = string

function createUser(user: User):User{
    return {name: "", email: "", isActive:true}
}

createUser({name: "", email: "", isActive:true})

  

//defining a user with type we made abouve

let myUser: User = {
  _id: "1234",
  name: "nime",
  email: "h3",
  isActive: true,
  
};

myUser.email = "ndn";
// myUser._id = "dkjlfnlgj"

type cardNumber = {
    cardnumber: string;

}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}




















export {}