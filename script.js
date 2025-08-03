const passwordbox = document.getElementById("password")
const lenghthofpassword = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbol = "!@#$%^&*()_+|}{\]['':;,./<>?"

const allChar = uppercase + lowercase + numbers + symbol

function creatpassword(){
    let passsword = ""
    passsword = passsword + uppercase[Math.floor(Math.random()*uppercase.length)];
    passsword = passsword + lowercase[Math.floor(Math.random()*lowercase.length)];
    passsword = passsword + numbers[Math.floor(Math.random()*numbers.length)];
    passsword = passsword + symbol[Math.floor(Math.random()*symbol.length)];

while(passsword.length < lenghthofpassword){
    passsword =  passsword + allChar[Math.floor(Math.random()*allChar.length)]
}

    passwordbox.value = passsword
}

function copyPassword() {
    const passwordBox = document.getElementById("password");
     if(passwordBox.value === ""){
    alert("The Password is Empty")
    return;
}
    
    navigator.clipboard.writeText(passwordBox.value)
    
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((err) => {
            alert("Failed to copy: " + err);
        });
}
