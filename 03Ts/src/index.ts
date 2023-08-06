// class User {
//     email: string
//     name: string
//     private readonly city: string = "readonly"
//     constructor(email:string, name: string){
//         this.email = email;
//         this.name = name;
//     }

//     get getAppleEMail(): string{
//         return `apple${this.email}`
//     }
// }

class User {
    private _courseCount =  1
  constructor(
   public email: string, 
   public  name: string
    ) {
   
  }
  private deleteToken(){
    console.log("Token deleted")
  }

  get getAppleEMail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number{
    return this._courseCount;
  }

  set courseCount(courseNum){
    if(courseNum <= 1){
        throw new Error("course count should be more than one");
    }
    this._courseCount = courseNum;
  }
}

const nidhin = new User("hi@f.com",  "uhfvu");
// nidhin.city 
console.log(nidhin);

