//your JS code here. If required.
let button=document.getElementById("but");
button.addEventListener("click",(event)=>{
	let fn =document.getElementById("fn");
	let ln=document.getElementById("ln");
	let pn=document.getElementById("pn");
	let ed=document.getElementById("ed")
	alert("First Name "+fn.value+" Last Name "+ln.value+" Phone Number: "+pn.value+" Email ID: "+ed.value);
})