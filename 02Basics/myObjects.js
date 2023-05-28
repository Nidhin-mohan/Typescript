"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'hitesh',
    email: "hitesh",
    isActive: true,
};
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser1({ name: "noidhion", isPaid: false, });
var newUser = { name: "hitesh", isPaid: false, email: "A@fgmail" };
createUser1(newUser);
function createCourse() {
    return { name: 'react', isPaid: true };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
//defining a user with type we made abouve
var myUser = {
    _id: "1234",
    name: "nime",
    email: "h3",
    isActive: true,
};
myUser.email = "ndn";



