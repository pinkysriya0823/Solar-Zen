
let oneSection = document.getElementsByClassName('section1')[0];
let twoSection = document.getElementsByClassName('section2')[0];
let threeSection = document.getElementsByClassName('section3')[0];



let spanOne = document.getElementsByClassName('span')[0];
let spanTwo = document.getElementsByClassName('span')[1];
let spanThree = document.getElementsByClassName('span')[2];



let bar = document.getElementsByClassName('bar')[0];


let done = document.getElementsByClassName('done')[0];



let name = document.getElementsByClassName('name')[0];
let email = document.getElementsByClassName('email')[0];



let nameAlert = document.getElementsByClassName('alert')[0];
let emailAlert = document.getElementsByClassName('alert')[1];





const sectionOne = () =>{
     
     oneSection.style.display = "none";
     twoSection.style.display = "block";
     
     bar.style.width = "50%";
     
     spanTwo.style.backgroundColor = "#000";
}



name.addEventListener('input',()=>{
     
     if(name.value.length <= 3){
          
          nameAlert.innerText = "too short!!";
   
     }else if(name.value.length >= 4){
          
          nameAlert.innerText = "";
          
     }
     
     
      if(name.value == ""){
          
          nameAlert.innerText = "empty!!";
     }
     
     
     
})


email.addEventListener('input',()=>{
     
     if(email.value.length <= 4){
          
          emailAlert.innerText = "enter valid email!!";
   
     }else if(email.value.length >= 5){
          
          emailAlert.innerText = "";
          
     }
     
     
     if(email.value == ""){
          
          emailAlert.innerText = "empty!!";
     }
     
     
     
})


const sectionTwo = () =>{
     
     if(name.value == ""){
          
          nameAlert.innerText = "empty!!";
     }
     
     if(email.value == ""){
          
          emailAlert.innerText = "empty!!";
     }
     
      if(email.value.length >= 5 && name.value.length >= 4){
          
           twoSection.style.display = "none";
     threeSection.style.display = "block";
     
     bar.style.width = "100%";
     
     spanThree.style.backgroundColor = "#000";
          
     }
     
     
    
     
     
}


const sectionThree = () =>{
     
     done.innerHTML = "<span style='color:#b71c1c;'>loading...</span>";
     
     setInterval(function(){
          
       done.innerText = "you added ✓";
          
     },3000)
     
}
