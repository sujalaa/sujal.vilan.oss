const input = document.getElementById("input")
const buttons = document.querySelectorAll("button")
const buttonarray = Array.from(buttons);
console.log(buttonarray)
let string = ""
buttonarray.forEach(btn=>{
btn.addEventListener("click", function(event){
 
  if(event.target.innerHTML === "DEL"){
    string =string.substring(0, string.length-1)
    input.value = string;
  } else if(event.target.innerHTML === "AC"){
    string = ""
    input.value = string;
  }else if(event.target.innerHTML === "="){
         string = eval(string);
         input.value = string;
  }   

   else{
    string += event.target.innerHTML;
    input.value = string;
  
   } 
   



   console.log(event.target.innerHTML)



})
})

































































