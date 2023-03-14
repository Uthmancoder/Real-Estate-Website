let homescreen = document.getElementById("homesScreen")
let homeimages = JSON.parse(localStorage.getItem("homes"))
let Newestscreen = document.getElementById("Newestscreen")
let upcomingscreen = document.getElementById("upcoming")
let affordableHomes = document.getElementById("affordable")
let luxScreen = document.getElementById("Luxury")
let newusername = document.getElementById("newusername")
let newname = document.getElementById("newname")
let newemail = document.getElementById("newemail")
let newpassword = document.getElementById("password")
let confirmpas = document.getElementById("Confirmpassword")
 let logemail = document.getElementById("emailfield")
 let logpass = document.getElementById("passwordfield")
console.log(homeimages);

function hidepassword(event) {
  event.preventDefault();
  document.getElementById("password").type = "text"
  document.getElementById("hidepas").style.display = "none"
  document.getElementById("showpas").style.display ="block"
}
function showpassword(event) {
  event.preventDefault();
  document.getElementById("password").type = "password"
  document.getElementById("hidepas").style.display = "block"
  document.getElementById("showpas").style.display ="none"
}
function hidepassword2(event) {
  event.preventDefault();
  document.getElementById("Confirmpassword").type = "text"
  document.getElementById("hidepas2").style.display = "none"
  document.getElementById("showpas2").style.display ="block"
}
function showpassword2(event) {
  event.preventDefault();
  document.getElementById("Confirmpassword").type = "password"
  document.getElementById("hidepas2").style.display = "block"
  document.getElementById("showpas2").style.display ="none"
}

for (let index = 0; index < homeimages.length; index++) {
    const element = homeimages[index];
    homescreen.innerHTML += `
    <div onclick = "viewhouse(${index})" class="prpt-div shadow m-3 py-2 px-3"> 
    <img class="picx" src="${element.image[0]}">
      <p class = ""> ${element.description} </p>
      <p class = ""> ${element.location} </p>
      <p class = ""> ${element.location2} </p>
    </div>`
}





let newsigneduser = [] 
function login() {
  document.getElementById("modal").style.display = "block"
}
function hidemodal() {
  document.getElementById("modal").style.display = "none"
}

 function signnewuser(event) {
  event.preventDefault();
  if (newusername.value == "" || newname.value == "" || newemail.value == "" || newpassword.value == "" || confirmpas.value == "") {
    alert("input field can not be empty")
    return;
  }else if (newpassword.value != confirmpas.value ) {
    alert("password does not match")
    return;
  }else if (!newemail.value.includes ("@gmail.com")){
  alert("please input a valid email address")
  return;
  }
  else{
    alert("signup successfuly")
    newsigneduser.push(userdata = {
      username : newusername.value,
      email : newemail.value,
      name : newname.value,
      password : newpassword.value,
      confirmpassword : confirmpas.value
    })
    console.log(newsigneduser);
    localStorage.setItem("newuser", JSON.stringify(newsigneduser))
  }
 }

 let getuser = JSON.parse(localStorage.getItem("newuser"))
console.log(getuser);
 function signuser (event){
  event.preventDefault();
  let finduser = getuser.find((user)=> user.email == document.getElementById("newemail").value && user.password == document.getElementById("password").value);
  console.log(finduser);
  if (finduser) {
    alert("login successfully");
  } else {
    alert("invalid details");
  }
}

function signup() {
  document.getElementById("modal2").style.display = "block"
}
function sell() {
 window.location.href = "sell.html"
}
let found = homeimages.find((current) => current.image)
function viewhouse(index) {
    let innerhome = homeimages[index].image;
    localStorage.setItem("home", JSON.stringify(innerhome))
    window.location.href = "showprpt.html"
}
