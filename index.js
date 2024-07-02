const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.getElementById("message-1")
let pwd2 = document.getElementById("message-2")
let userlength = document.getElementById("user-input")
function generate(){
    let pass1 = ""
    let pass2 = ""
    for(let i=0;i<userlength.value;i++)
    {
        let index_pass1 = Math.floor(Math.random() * characters.length);
        let index_pass2 = Math.floor(Math.random() * characters.length);
        pass1 += characters[index_pass1]
        pass2 += characters[index_pass2]
    }
    pwd1.textContent = pass1
    pwd2.textContent = pass2
    // console.log(pass1)
    // console.log(pass2)
}
function copyText() {
    console.log(pwd1.textContent);
    
    navigator.clipboard.writeText(pwd1.textContent).then(() => {
        document.getElementById('copy-status').textContent = 'Copied to clipboard!';
    }).catch(err => {
        document.getElementById('copy-status').textContent = 'Failed to copy!';
        console.error('Could not copy text: ', err);
    });
}



