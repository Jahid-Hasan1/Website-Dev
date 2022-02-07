var head1=document.getElementById("head");
head1.innerHTML="Heading by Javascript";
head2=document.getElementsByTagName("h1");
head2[1].innerHTML="Changed by JS.";//index no. of tags must have mentioned.
document.getElementsByClassName("btn")[0].innerHTML="Click JS.";
//get elements bt query selector.
document.querySelector("#name").innerHTML="JS, HTML, C, Python";
document.querySelector(".para").innerHTML="paragraph is changed by js.";
document.querySelectorAll("h1")[2].innerHTML="Changed by query slector ALL.";
document.querySelector(".cls a").innerHTML="Inner link accessed by js";
var par=document.querySelector(".para");
par.style.color="blue";
par.title="Jahid";
var pic= document.querySelector(".img");
function image1(){
  pic.src = "../resource/bg.jpg";
}
function image2(){
  pic.src = "../resource/fav.jpg";
}
function image3(){
  pic.src = "../resource/car.jpg";
}
// creating elements.
var head3=document.createElement("h1");
var text=document.createTextNode("This is the heading has been created by JS");
head3.appendChild(text);
var body=document.getElementsByTagName("body")[0];
body.appendChild(head3);


//inserting in specific position.
var head4=document.createElement("h1");
var text=document.createTextNode("The heading has been palced in this specific position by JS");
head4.appendChild(text);
var body=document.getElementsByTagName("body")[0];
var before=document.getElementsByTagName("h1")[2];
body.insertBefore(head4,before);
//for replacing: replaceChild(newChild, oldChild);
//removing elements.
var remv=document.getElementsByTagName("h1")[1];
body.removeChild(remv);

//picture gallary.
var imgClass=document.querySelector(".imgGal");
picBox=["../resource/pic1.jpg", "../resource/pic2.jpg", "../resource/pic3.jpg", "../resource/pic4.jpg", "../resource/pic5.jpg", "../resource/pic6.jpg", "../resource/pic7.jpg", ]
var count=0;
function next(){
  count++;
  imgClass.src=picBox[count];
  if(count===picBox.length)
  {
    count=0;
    imgClass.src=picBox[count];
  }
}
var pr=document.querySelector("#prevId");
function prev(){
  count--;
  if(count<0){
    count=0;
  }
  imgClass.src=picBox[count];
}

//css control by JS.
var para_id=document.querySelector("#pId");
function addSt(){
  para_id.classList.add("para");
}
function removeSt(){
  para_id.classList.remove("para");
}
//add event listener.
var btn_id=document.querySelector("#liBtn");
btn_id.addEventListener("click", fun) //replace at 'click': mouseover, mouseout etc.
function fun(){
  alert("message via event listener.");
}
//anonemous function.
var btn_id=document.querySelector("#liBtn2");
btn_id.addEventListener("click", function(){
  alert("message via event listener with anonemous function.");
});
//adding event listener for many buttons.
var len = document.querySelectorAll(".btnj").length;

for (var i=0; i<len; i++){
  document.querySelectorAll(".btnj")[i].addEventListener("click", function(){
    var text=this.innerHTML;
    document.querySelector(".btnHead").innerHTML=text+" button is clicked.";
  });
}
//to put audio: var aud_name= new Audio("location");
//to play audio: aud_name.play();
//to repeat calling a function after a certain time: setTimeout(fun_name, time_duration);

//Direct writting by keyboard;
/*document.addEventListener("keypress",function (event){
  var letter= event.key;
  document.querySelector(".p1").innerHTML="You pressed: "+letter;
  write(letter);
});

function write(lett){
  switch(lett){
    case 'a':
    case 'b':
    case "c":
    case "d":
    case "e":
    case "f":
    case "g":
    case "h":
    case 'i':
    case 'j':
    case "k":
    case "l":
    case "m":
    case "n":
    case "o":
    case "p":
    case 'q':
    case 'r':
    case "s":
    case "t":
    case "u":
    case "v":
    case "w":
    case "x":
    case 'y':
    case 'z':
      document.querySelector(".p2").innerHTML=lett;
      break;
    default:
      document.querySelector(".p2").innerHTML="Enter charecter a-z";
  }
}*/
//counting charecter number.
var c=0;
document.addEventListener("keypress",function (event){
  var letter= event.key;
  c++;
  document.querySelector("p3").innerHTML="You pressed: "+c+" charecter";
});
//addEventListener another.
document.querySelector("input").addEventListener("change", fun);
function fun(event1){
  document.querySelector("p4").innerHTML="Changed by EventListener";
}
//'change' key with checkbox on EventListener.
const boxes=document.querySelectorAll("input[name=cbox]");
Array.from(boxes).map((program) => {
  program.addEventListener("change", handeler)
});
function handeler(ev){
  if(ev.target.checked){
    var res=ev.target.value;
    console.log(res);
  }
}
//N.B: to not refrashing the written values from a form after submittig, call "event.preventDefauld();" by EventListener with key 'submit'; tutorial-46;
//Tutorial-46 end.
