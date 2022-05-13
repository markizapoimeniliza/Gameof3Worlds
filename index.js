

//getters and setters as names
let options = document.getElementById("options")

const humanityOfProgramming = {
    numberOftheWorld: [" 1" , " 2" ," 3"],
    nameOftheworld: [" Cracken", " Cookies"," Bugs"], 
    get Option(){     //with name ALWAYS! in this case we can't use name: we CANT  use parameters
       options.innerHTML=  `<button type = "submit" style = "background: black; color: white; padding: 13px; width: 123px" > 
       ${this.nameOftheworld[0]}  </button>
       <button type = "submit"  style = "background: black; color: white; padding: 13px; width: 123px" >
        ${this.nameOftheworld[1]}  </button>
       <button type = "submit"  style = "background: black; color: white; padding: 13px; width: 123px">
        ${this.nameOftheworld[2]}  </button>
       <br/> ${this.numberOftheWorld.join(" ")}`  //we can use tags as innerHtml
    },
    set Option(value){
       options.innerHTML =  value //work WITH VARIABLES!!! 
    }
}

function HomePage(){
    humanityOfProgramming.Option //anyway it has value - WE CANNOT USE THIS
    setTimeout(() => {
    humanityOfProgramming.Option = "Be faster! Adventures are waiting for you!"},5000
     )
}

HomePage()

//[] - will output its value   





// data encapsulation
// const person = {
//     firstName: "Elizaveta",
//     secondName: "Vakhlakova",
//     age:18,
//     get FullName(){ //access properties in an object !
//         setTimeout(() => {
//             return `${this.firstName} ${this.secondName} ${this.age}`
//         },5000)
//     },
//     set FullName(value){ //mutate these properties
//        [this.firstName,this.secondName,this.age] = value.split(" ",3) //(optional separator, optional limit)
//     }
// }

// person.FullName = "Gena Grovov 88 " //string

// console.log(person)




//split - substrings in an array ["","",""]
// split - " " ONLY THAT  === , 
//string object acts as a wrap
// = BECOME
//"" 1 string 

//value create ! (maybe 1)

//join - contemplate 

//function pass by reference vs by value

//pass by reference - concrete 
//by value - can be modified