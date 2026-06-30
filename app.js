let input=document.querySelector("input");
let buttons=document.querySelectorAll("button");
let value="";
buttons.forEach((button)=>{
    
   button.addEventListener("click",(e)=>{
 value=e.target.innerText
  const operator=["+","*","-","/"]
    let lastChar=input.value.slice(-1);
  if(value==="="){
    input.value=eval(input.value);
  }
  
   else if(value==="AC"){
    input.value="";
  }
  else if(value==="DEL"){
    input.value=input.value.slice(0,-1)
  }
  
  else if(value==="="){
    input.value=eval(input.value);
  }
else if(operator.includes(value) && operator.includes(lastChar)){
    input.value= input.value.slice(0,-1)+value
}

else { 
    
    input.value=input.value+value

    }
   })
})
