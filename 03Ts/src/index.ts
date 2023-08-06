class User {
    email: string
    name: string
    private readonly city: string = "readonly"
    constructor(email:string, name: string){
        this.email = email;
        this.name = name;
    }
}

const nidhin = new User("hi@f.com",  "uhfvu")
// nidhin.city 
console.log(nidhin)