//localStorage.clear();
let counts=0;
function create(value,counter){
  counts++;
    let elementOne=document.createElement("p");
  let content=document.createTextNode(value);
  elementOne.appendChild(content);
  elementOne.setAttribute("id","par"+counter);
  elementOne.setAttribute("class","font");
  elementOne.style.textDecoration=localStorage.getItem("par"+counter);
  let createDiv=document.createElement("div");
  createDiv.setAttribute("id","para"+counter);
  createDiv.setAttribute("class","overflow");
  let createOuterDiv=document.createElement("div");
  createOuterDiv.setAttribute("id","contain"+counter);
  //console.log(counter);
  //createOuterDiv.setAttribute("class","style");
  createOuterDiv.setAttribute("class","container");
  
  
  createDiv.appendChild(elementOne);
  createOuterDiv.appendChild(createDiv);
  let outerDiv=document.getElementById("contain");
  let insertBefore=document.getElementById("containx");
  outerDiv.insertBefore(createOuterDiv,insertBefore);
  
  let tick=document.createElement("i");
  tick.setAttribute("class","fas fa-check-circle fa-lg");
  tick.style.color=localStorage.getItem("tick"+counter);
  let tickdiv=document.createElement("div");
  tickdiv.setAttribute("class","tick");
  tickdiv.setAttribute("id","tick"+counter);
  tickdiv.appendChild(tick);
  createOuterDiv.appendChild(tickdiv);
  
   let cross=document.createElement("i");
  cross.setAttribute("class","far fa-times-circle fa-lg");
  let crossdiv=document.createElement("div");
  crossdiv.setAttribute("class","cross");
  crossdiv.setAttribute("id",counter);
  crossdiv.appendChild(cross);
  createOuterDiv.appendChild(crossdiv);
  
}



let click=document.getElementById("button");
let add=localStorage.getItem("count");
if (add==null){
  add=1;
  
} 
else{
 add=localStorage.getItem("count");
  for(let i=1;i<add;i++){
  if(localStorage.getItem("text"+i)!=null ) 
  create(localStorage.getItem("text"+i),i);
  

}
 
}

//alert(add); 
click.addEventListener("click",function(){
  let b=document.querySelector("#input").value;
  if(b!==localStorage.getItem("text"+(add-1))&&b!=="") {
    
  create(b,add); 
   clearit(0); 
    
  let selectDel=document.getElementById(add);
    selectDel.addEventListener("click",function(){    
      counts--;
      let rem=this.parentNode; 
      clearit(600);
      rem.style.backgroundColor="#fc3a3a"; //"#ff2b2b";
      
  setTimeout(function(){
    rem.parentNode.removeChild(rem); 
  },600) ; 
      
      localStorage.removeItem("text"+this.id);
    });
    
    let ticksel=document.getElementById("tick"+add);

    ticksel.addEventListener("click",function(){
     let striked=this.parentNode.firstChild.firstChild; 
      //alert(striked.id);
      if(this.firstChild.style.color!=="green"){ 
      striked.style.textDecoration="line-through";   
      this.firstChild.style.color="green";
      localStorage.setItem(this.id,"green");
       localStorage.setItem(striked.id,"line-through");
       
      
      }
    else
       {
      striked.style.textDecoration="none"; 
      this.firstChild.style.color="#A8A8A8";
         localStorage.setItem(this.id,"#A8A8A8");
          localStorage.setItem(striked.id,"none");
      
  
       }
      
    }); 
    
  
  localStorage.setItem("text"+add,b);
  add++;
  localStorage.setItem("count",add);
}
 
}); 

let deleted=document.querySelectorAll(".cross");
for(var i=0;i<deleted.length;i++){


deleted[i].addEventListener("click",function(){  
   counts--;
  let remove=this.parentNode; 
  remove.style.backgroundColor="#fc3a3a";
  clearit(600);
   
  setTimeout(function(){
    remove.parentNode.removeChild(remove); 
  },600) ; 
  
  localStorage.removeItem("text"+this.id);
  
  
});
}
let tickselect=document.querySelectorAll(".tick");


for(let j=0;j<tickselect.length;j++){
  
  tickselect[j].addEventListener("click",function(){ 
    let strike=this.parentNode.firstChild.firstChild;
   // alert(strike.id);
    
    //strike.appendChild(strike);
     console.log(strike);
     if( this.firstChild.style.color!=="green")
    {
      this.firstChild.style.color="green";
      localStorage.setItem(this.id,"green");
      strike.style.textDecoration="line-through";
      localStorage.setItem(strike.id,"line-through");
      
    }
    else{
      
    
      this.firstChild.style.color="#A8A8A8";
      localStorage.setItem(this.id,"#A8A8A8");
      strike.style.textDecoration="none";
       localStorage.setItem(strike.id,"none");
    }    
    
  });
}
function clearit(time){
  

 
setTimeout(function(){
  if(counts<2)
  document.getElementById("clear").style.display="none";

else
 document.getElementById("clear").style.display="block";
  
  
},time);
}

clearit(0);

let clearAll=document.getElementById("clear");
clearAll.addEventListener("click",function(){
  localStorage.clear();
  counts=0;
  //clearit("ff",0);
  let buttonclear=document.getElementById("clear");
  let timecount=0;
  let getclear=document.querySelectorAll(".container")
//    for(var i=0;i<getclear.length;i++){
     
//      getclear[i].style.backgroundColor="#fc3a3a";
     
    
//   }
  
  for (var i = 0; i < getclear.length; i++) {
   timecount=275*(i+1);
    (function (i) {
    setTimeout(function () {
     
     getclear[i].style.backgroundColor="#fc3a3a";
     },275*(i+0.4));
    })(i);
    
  (function (i) {
    setTimeout(function () {
     
     getclear[i].parentNode.removeChild(getclear[i]);
     },275*(i+1));
    })(i);
   }
  //alert(timecount);
  setTimeout(function(){
    buttonclear.style.display="none";
  },timecount);
  
  
});