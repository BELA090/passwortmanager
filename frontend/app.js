function savePassword(){

let website=document.getElementById("website").value
let username=document.getElementById("username").value
let password=document.getElementById("password").value

let entry={
website:website,
username:username,
password:password
}

let passwords=JSON.parse(localStorage.getItem("passwords")) || []

passwords.push(entry)

localStorage.setItem("passwords",JSON.stringify(passwords))

loadPasswords()

}

function loadPasswords(){

let list=document.getElementById("passwordList")

list.innerHTML=""

let passwords=JSON.parse(localStorage.getItem("passwords")) || []

passwords.forEach(p=>{

let li=document.createElement("li")

li.textContent=p.website+" | "+p.username+" | "+p.password

list.appendChild(li)

})

}

window.onload=loadPasswords