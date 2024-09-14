let car ={
    make: "honda",
    model: "xyz",
    year: "2024",
    colors: ["black", "white", "red"],
    hybrid: false,
    drive: function(){
        console.log("car is moving")       
       },
    stop: function(){
        console.log("car has been stop")
    }
}

console.log(car.make)
console.log(car.model)
console.log(car.year)
console.log(car.colors)
console.log(car.colors[0])
console.log(car.drive())
console.log(car.stop())

car.colors.push("yellow")
console.log(car.colors)
car.colors.unshift("yellow")
console.log(car.colors)

car.colors.splice(0,2, "orange")
console.log(car.colors)


let person1 ={
 name: "essa",
 age: 15,
 status: "resident"
}


let person2 ={
    name: "ali",
    age: 25,
    status: "Torist"
   }

   if( person1.age > 18 && person1.status === "resident"){
    console.log("person 1 has permission")
   } else if( person2.age > 18 && person2.status === "resident"){
    console.log("person 2 has permission")
   }
   else{
    console.log("you both have not permission")
   }

alret("Copyright Mohd Essa 262915")

 
