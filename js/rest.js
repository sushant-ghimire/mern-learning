// let object={
//     name:"sushant",
//     email:"sushantghimire987@gmail.com",
//     password:"123"
// };

// const {name,email,...test}=object;

// console.log(test)



const students=[{
    name:"sushant",
    age:100,
    email:"sushant@gmail.com",
    password:"sushant@1",
},
{
    name:"Kedar",
    age:100,
    email:"kedar@gmail.com",
    password:"Kedar@1",
},
{
    name:"Samira",
    age:100,
    email:"samira@gmail.com",
    password:"Samir@1",
},

];
students.push({
    name:"Sanju",
    age:100,
    email:"sanju@gmail.com",
    password:"Sanjaya@1"
})



for (const element of students) {

    if(element.name =="Kedar"){
        continue;
    }
    console.log(element);
}


