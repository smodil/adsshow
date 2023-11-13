setTimeout(function(){
  document.getElementById("timer").innerHTML = "Wait for 4 seconds...";
}, 1000)




setTimeout(function() {
  document.getElementById("timer").innerHTML = "Wait for 3 seconds...";
}, 2000)



setTimeout(function() {
  document.getElementById("timer").innerHTML = "Wait for 2 seconds...";
}, 3000)



setTimeout(function() {
  document.getElementById("timer").innerHTML = "Wait for 1 seconds...";
}, 4000)



setTimeout(function() {
  document.getElementById("timer").innerHTML = "Scroll down and press continue";
  
  document.getElementById("cont").innerHTML = '<button onclick="cont()">Continue</button>';
}, 5000)


function cont(){
 
 
 document.getElementById("cont").innerHTML = '<a id="th" href="key_90019202.html">Processing</a>';
 
 document.getElementById("th").click();
 
  
}