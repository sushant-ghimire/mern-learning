for(i=1;i<=5;i++){
    process.stdout.write("hi");
}

for(j=1;j<=10;j++){
    console.log(`2 x ${j} =${2*j}`)
}

const obj= {
    name:"sushant",
    age: 20,
    gender: "male"
}

for(key in obj){  //used for object
 console.log(`${key}:${obj[key]}`);   
}

const array=["Ram","Shyam","Sushant"];

for(nameOfArray of array){// used for array
    console.log(`${nameOfArray} is learing fullstack.\n`);
}

array.forEach(element => {
   console.log(element); 
});



// a=1
// while(a<=10){
//     console.log(a)
//     a++
// }



b=2
do{
    console.log(b)
    b++
}while(b<=10)



