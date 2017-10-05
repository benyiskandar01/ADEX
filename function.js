//function to show color

function colour(warna,warni){ 
document.bgColor = warna;
document.getElementById("txt").value = warna;
document.getElementById("jms").style.color = warni;
} 

//function to show clock

function jam(){ 
x=new Date() 
jams=x.getHours() 
minutes=x.getMinutes() 
seconds=x.getSeconds() 
document.getElementById("jms").innerHTML = jams+":"+minutes+":"+seconds
setTimeout("jam()",1000) 
} 
jam()
