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