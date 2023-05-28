let score: number| string = 33;

score =44;
score = "34";


type User = {
    name: string ;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let nidhin: User | Admin = {
    name: " midhum",
    id: 4,
}

nidhin = {
    username: "nid",
    id:4
}



// function getDBId (id: number | string){
//     console.log(`DB id ${id}`)
// }

getDBId(4);
getDBId("4");


function getDBId(id: number | string) {
    if(typeof id === "string"){
            id.toLowerCase();
    }
    else{
        console.log(id +id)
    }

  console.log(`DB id ${id}`);
}


// Array

const data : number[] =[1, 2, 3, ]
const data2 : string[] =[ "2", "3"]
const data3 : (string|number| boolean) [] = ["1", 3, true]

// let pi:3.14 =3.14;
// // pi = 342;

let seatAllotment: 'aisle' | 'middle' | 'window'


seatAllotment = "aisle";
// seatAllotment = "crue"