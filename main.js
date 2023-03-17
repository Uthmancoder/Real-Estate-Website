let homescreen = document.getElementById("homesScreen")
let Newestscreen = document.getElementById("Newestscreen")
let upcomingscreen = document.getElementById("upcoming")
let affordableHomes = document.getElementById("affordable")
let luxScreen = document.getElementById("Luxury")
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
function sell() {
   if (!signeduser) {
    window.location.href = "signup.html"
   }else{
    window.location.href = "sell.html"
   }
}
function findrentals() {
   if (!signeduser) {
      window.location.href = "signup.html"
     }else{
      window.location.href = "rent.html"
     }
}
function manage() {
   window.location.href = "manage.html"
}
function advertise() {
   window.location.href = "https://www.realtor.com/marketing/"
}
