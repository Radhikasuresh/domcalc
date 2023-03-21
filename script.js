var title=document.createElement("h1");
title.setAttribute("id","title");
title.setAttribute("style","color:white");
title.innerHTML="Calculator";
document.body.append(title);
var des=document.createElement("p");
des.setAttribute("id","description");
des.setAttribute("style","color:white");
des.innerHTML="This is a Calculator";
document.body.append(des);
var start=document.createElement("div");
start.setAttribute("class","calculator");
var inputs=document.createElement("input");
inputs.setAttribute("type","text");
inputs.setAttribute("placeholder","0");
inputs.setAttribute("id","result");
document.body.append(start);
var div1=document.createElement("div");
var buttons1=document.createElement("button");
buttons1.setAttribute("id","clear");
buttons1.innerHTML="AC";
var buttons2=document.createElement("button");
buttons2.setAttribute("class","operator");
buttons2.innerHTML="DEL";
var buttons3=document.createElement("button");
buttons3.setAttribute("class","symbol");
buttons3.innerHTML="%";
var buttons4=document.createElement("button");
buttons4.setAttribute("class","symbol");
buttons4.innerHTML="/";
div1.append(buttons1,buttons2,buttons3,buttons4);
var div2=document.createElement("div");
var buttons5=document.createElement("button");
buttons5.setAttribute("class","Numbers");
buttons5.innerHTML="7";
var buttons6=document.createElement("button");
buttons6.setAttribute("class","Numbers");
buttons6.innerHTML="8";
var buttons7=document.createElement("button");
buttons7.setAttribute("class","Numbers");
buttons7.innerHTML="9";
var buttons8=document.createElement("button");
buttons8.setAttribute("class","symbol");
buttons8.innerHTML="*";
var div3=document.createElement("div");
var buttons9=document.createElement("button");
buttons9.setAttribute("class","Numbers");
buttons9.innerHTML="4";
var buttons10=document.createElement("button");
buttons10.setAttribute("class","Numbers");
buttons10.innerHTML="5";
var buttons11=document.createElement("button");
buttons11.setAttribute("class","Numbers");
buttons11.innerHTML="6";
var buttons12=document.createElement("button");
buttons12.setAttribute("id","subtract");
buttons12.innerHTML="-";
var div4=document.createElement("div");
var buttons13=document.createElement("button");
buttons13.setAttribute("class","Numbers");
buttons13.innerHTML="1";
var buttons14=document.createElement("button");
buttons14.setAttribute("class","Numbers");
buttons14.innerHTML="2";
var buttons15=document.createElement("button");
buttons15.setAttribute("class","Numbers");
buttons15.innerHTML="3";
var buttons16=document.createElement("button");
buttons16.setAttribute("id","add");
buttons16.innerHTML="+";
var div5=document.createElement("div");
var buttons17=document.createElement("button");
buttons17.setAttribute("class","dot");
buttons17.innerHTML="00";
var buttons18=document.createElement("button");
buttons18.setAttribute("class","Numbers");
buttons18.innerHTML="0";
var buttons19=document.createElement("button");
buttons19.setAttribute("class","dot");
buttons19.innerHTML=".";
var buttons20=document.createElement("button");
buttons20.setAttribute("id","equal");
buttons20.innerHTML="=";
div1.append(buttons1,buttons2,buttons3,buttons4);
div2.append(buttons5,buttons6,buttons7,buttons8);
div3.append(buttons9,buttons10,buttons11,buttons12);
div4.append(buttons13,buttons14,buttons15,buttons16);
div1.append(buttons1,buttons2,buttons3,buttons4);
div2.append(buttons5,buttons6,buttons7,buttons8);
div3.append(buttons9,buttons10,buttons11,buttons12);
div4.append(buttons13,buttons14,buttons15,buttons16);
div5.append(buttons17,buttons18,buttons19,buttons20);


start.append(inputs,div1,div2,div3,div4,div5);
document.body.append(start);



let input=document.getElementById("result");
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string='';
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1 );
            input.value=string;

        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
       
    })
    
   
})