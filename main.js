let homescreen = document.getElementById("homesScreen")
let Newestscreen = document.getElementById("Newestscreen")
let upcomingscreen = document.getElementById("upcoming")
let affordableHomes = document.getElementById("affordable")
let luxScreen = document.getElementById("Luxury")

let homeimages = JSON.parse(localStorage.getItem("home"))
console.log(homeimages);
// for (let index = 0; index < homeimages.length; index++) {
//     const element = homeimages[index];
//     homescreen.innerHTML += `
//     <div onclick = "viewhouse(${index})" class="prpt-div shadow m-3 py-2 px-3"> 
//     <img class="picx" src="${element.image[0]}">
//       <p class = ""> ${element.description} </p>
//       <p class = ""> ${element.location} </p>
//       <p class = ""> ${element.location2} </p>
//     </div>`
// } 

let newsigneduser = [] 
function login() {
 window.location.href = "login.html"
}



function signup() {
  window.location.href = "signup.html"
}
function sell() {
 window.location.href = "sell.html"
}
function viewhouse(index) {
    let innerhome = homeimages[index].image;
    localStorage.setItem("home", JSON.stringify(innerhome))
    window.location.href = "showprpt.html"
}

let signeduser = JSON.parse(localStorage.getItem ("logeduser"))
console.log(signeduser);
function browse() {
   if (!signeduser) {
    window.location.href = "signup.html"
   }else{
    window.location.href = "homes.html"
   }
}