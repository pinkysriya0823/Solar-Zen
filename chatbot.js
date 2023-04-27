function talk(){
  var know = {
  "where can i get solar panels" : "We have provided information about Solar Panel providers in the Menu, you can even Contact Us. ",
  "what are the government schemes" : "Click Learn More Button in homepage.",
  "what can i do for you" : "Share this website with everyone and spread awareness about renewable energy sources.",
  "members of your organisation" : "We are a team of 300 students. ",
  "ok" : "Thank You So Much ",
  "bye" : "Okay! Will meet soon.."
  };
  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
  document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
  document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
  }
