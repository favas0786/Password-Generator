const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abccdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+=-\{}][/<>"


function createPassword (){
    let password = ""
    password += upperCase[Math.floor(math.random()*upperCase.length)]
    password += loeweCase[Math.floor(math.random()*lowerCase.length)]
    password += number[Math.floor(math.random()*number.length)]
    password += symbol[Math.floor(math.random()*symbol.length)]
}