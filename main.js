var key;

function otpGen(){
  
  var key_gen=crypto.randomUUID();
  key=key_gen
  return key_gen;
}

function email1(){
  
  var email = document.getElementById("email").value;
  
  document.getElementById("em").innerHTML = '<input id="_key" type="text" placeholder="Enter the key which was sent to your email"><br><h6 id="err"></h6><br><br><br><button onclick="checkKey()"> Next-> </button>';
  
  
  Email.send({
    SecureToken: "3c6861a6-f9c5-4a90-8277-ca25080247ad",
    To: document.getElementById("email").value,
    From: "getbocksweb@outlook.com",
    Subject: "Your Ads show Key is",
    Body: key
  }).then(
    message => alert(message)
  );
  
  
}

function checkKey(){
  var key_input = document.getElementById("_key").value;
  if(key_input === key){
    document.getElementById("err").innerHTML = " ";
    alert("Key is valid");
  }
  else if(key_input < key){
    document.getElementById("err").innerHTML= 'Invalid key';
  }
  else if (key_input > key) {
    document.getElementById("err").innerHTML = 'Invalid key';
  }
}