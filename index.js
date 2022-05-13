//single threaded - JS
//therefore can't use sleep()


//getters and setters as names
let options = document.getElementById("options")
let article = document.getElementById("article")
let header = document.getElementById("header")

const humanityOfProgramming = {
    numberOftheWorld: ["Made", "by", "Elizaveta Vakhlakova"],
    nameOftheworld: [" Meta", " Cookies"," Bugs"], 
    get Option(){     //with name ALWAYS! in this case we can't use name: we CANT  use parameters
       options.innerHTML =  `<button type = "submit" style = "background: black; color: white; padding: 13px; width: 123px" onclick = "WorldOne()"
       > 
       ${this.nameOftheworld[0]}  </button>
       <button type = "submit"  style = "background: black; color: white; padding: 13px; width: 123px" onclick = "WorldTwo()">
        ${this.nameOftheworld[1]}  </button>
       <button type = "submit"  style = "background: black; color: white; padding: 13px; width: 123px" onclick = "WorldThree()">
        ${this.nameOftheworld[2]}  </button>
       <br/> <span style = "font-size: 15px ">  ${this.numberOftheWorld.join(" ")} </span>`  //we can use tags as innerHtml
    },
    set Option(value){
       options.innerHTML =  value //work WITH VARIABLES!!!  `` NOT A VALUE!
    }
}


function HomePage(){
    humanityOfProgramming.Option //anyway it has value - WE CANNOT USE THIS
    setTimeout(() => {
    humanityOfProgramming.Option = "Be faster! Adventures are waiting for you!";
      setTimeout(() => {
         humanityOfProgramming.Option
      },2000)
   },5000 //setInterval ONLY INSIDE IT 
     )
    
   
}


HomePage()



const firstWorld = Object.create(humanityOfProgramming, {
   skin: { 
      value: `<header style = "font-size: 23px; text-align: center; line-height: 23 px">
      Welcome to Meta! Everything is out here is into another reality! 🪄 <header>`,
      enumerable: true,
      writable: false,
      configurable: false
   }
})

const  secondWorld = Object.create(humanityOfProgramming, {
   skin: { 
      value:  `<header style = "font-size: 23px; text-align: center; line-height: 23 px">
      Welcome to Cookies! It is not these chocolate cookies🍪! <header>`,
      enumerable: true,
      writable: false,
      configurable: false
   }
})



const thirdWorld = Object.create(humanityOfProgramming,{
     skin: {
        value:  `<header style = "font-size: 23px; text-align: center; line-height: 23 px">
        Be careful! There are a lot of bugs🐞! <header>`,
        enumerable: true
     }
})

 

let WorldOne = () => {
for (var keys in firstWorld){  //all properties  //let will not be seen for outside if!
   if(firstWorld.hasOwnProperty(keys)){
   article.innerHTML += `${firstWorld[keys]}`
   }
   setTimeout(() =>  {
      setTimeout(() => {
         options.innerHTML = " ",
         header.innerHTML = " Download .... "
      }, 0900)
      article.innerHTML = " "
      header.innerHTML = " "
   }, 1000)

}
}

let WorldTwo = () => {
   for (let keys in secondWorld){
      if(secondWorld.hasOwnProperty(keys)){
         article.innerHTML += secondWorld[keys]
      }
   }
   setTimeout(() => {
      setTimeout(() => {
      options.innerHTML = " ",
      header.innerHTML = "Download .."
   }, 0900)
      article.innerHTML = " " 
      header.innerHTML = " "
   }, 1000)
   
}

 let WorldThree = () => {
      for (let keys in thirdWorld){
         if(thirdWorld.hasOwnProperty(keys)){
            article.innerHTML += thirdWorld[keys]
         }
      }
      setTimeout(()=> {
         article.innerHTML = " "
         header.innerHTML = " "
        setTimeout( () => {
         header.innerHTML = "Download ... ",
         options.innerHTML = " "
      }, 0900)
      }, 1000)
      }

 
//addeventlistener - many fucntions







// object.method(value) 
// function()
//setName = reassign



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

//console.clear()
//setTimeout.clear(name)
//setInterval.clear(name)
//" " html elements