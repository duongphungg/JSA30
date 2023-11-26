let myInfo = {
    FullName: "Phùng Nam Dương",
    Dateofbirth: "28/05",
    Email: "PND@gmail.com",
    Gender: "Male" ,
    Phone: "0878606588",
    Address: "Tecco",

}

localStorage.setItem("myInfo", JSON.stringify(myInfo))
let myInfoSaved = JSON.parse(localStorage.getItem("myInfo"));
const nameHTML = document.getElementById("name");
nameHTML.innerText = myInfoSaved.FullName;
const DateofbirthHTML = document.getElementById("date");
DateofbirthHTML.innerText = myInfoSaved.Dateofbirth;
const emailHTML = document.getElementById("email");
emailHTML.innerText = myInfoSaved.Email;
const GenderHTML = document.getElementById("gender");
GenderHTML.innerText = myInfoSaved.Gender;
const phoneHTML = document.getElementById("phone");
phoneHTML.innerText = myInfoSaved.Phone;
const addressHTML = document.getElementById("address");
addressHTML.innerText = myInfoSaved.Address;







