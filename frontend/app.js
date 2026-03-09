async function savePassword(){

let website=document.getElementById("website").value
let username=document.getElementById("username").value
let password=document.getElementById("password").value

await fetch("https://0f1qclhen7.execute-api.us-east-1.amazonaws.com/prod/save",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
website:website,
username:username,
password:password
})
})

alert("Passwort gespeichert")

}