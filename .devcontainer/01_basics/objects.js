// Object literals?\

// const mySyc = Symbol("edkdi")
// const JsUser={
//     name:"shweta",
//     age:18,
//     [mySyc]:"ek_sb_ki_keydi",
//     lodcation:"Delhi",
//     email:"pokhriyial.ldh@3451gmail.co",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }
// console.log(JsUser.email)
// console.log (JsUser['email'])
// console.log(JsUser[mySyc])

// JsUser.email = "bhatt@sarehi10chutiya h"
// // Object.freeze(JsUser)
// JsUser.email ="skdfjhd@dog.com"
// // console.log(JsUser['email'])

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.grettingTwo());


//------------Singleton----------
// // const tinderUser = new Object ()
// const tinderUser ={}
// tinderUser.id = "123abc"
// tinderUser.name ="Shivi"
// tinderUser.isLoggedIn = false

// // // console.log(tinderUser);

// const regularUser={
//     emial:"some@gamol.cojm",
//     fullname:{
//         userfullname:{
//             firstname:"sherta",
//             lastname: "Bhatt"

//         }
//     }
// }
// // console.log(regularUser.fullname?.userfullname.lastname);


// const obj1 = {1:"a",2:"b"}
// const obj2 ={3:"a", 4:"b"}
// const obj4 ={5:"a", 6:"b"}

// // const obj3={ obj1, obj2}
// // const obj3= object.assign({}, obj1, obj2, obj4)
// const obj3={...obj1, ...obj2}
// // console.log(obj3);

// // users[1].email
// console.log(tinderUser);
// console.log(object.keys(tinderUser));
// console.log(objec.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));