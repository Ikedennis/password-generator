const characterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15;
let btnPass = document.getElementById("btn-password")
let copyOne = document.getElementById("copy-one")
let copyTwo = document.getElementById("copy-two")


btnPass.addEventListener("click", function(){
    generatePass()
    
})

function generatePass(){
    let password = "";
    let password2 = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterArray.length);
        const randomIndex2 = Math.floor(Math.random() * characterArray.length);
        password += characterArray[randomIndex];
        password2 += characterArray[randomIndex2];
        copyOne.textContent = password
        copyTwo.textContent = password2
    }
    
    
}

