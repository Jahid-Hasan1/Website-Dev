//Constructor for object title.
function tamplate(name,id,dist,cgpa,lang){
  this.name=name,
  this.id=id,
  this.dist=dist,
  this.cgpa=cgpa,
  this.lang=lang

  //for printing.
  this.display=function(){
    console.log(this.name);
    console.log(this.id);
    console.log(this.cgpa);
  }
};

var st1=new tamplate("Karim",192074,"Cumilla",3.42,["Eng","Bangoli","Hindi"]);
var st2=new tamplate("Jahid",192078,"Dhaka",3.36,["Spanis","Eng","Herin"]);
var st3=new tamplate("Sojib",192099,"Cumilla",3.85,["Eng","Bangoli","Hindi"]);
console.log(st1);
console.log(st2.cgpa);
st3.display();
st1.display();
//mathmetiacal functions: Math.sqrt(num),Math.pow(n1,n2), Math.floor(floatNum), Math.ceil(floatNum), Math.round(floatNum),
//Math.max(n1,n2,n3,....), Math.abs(n), Math.sin(n), Math.random() etc.
//Random number.
var num=Math.random();//num<1
console.log(num);
num=Math.random()*5;//num<5;
console.log(num);
num=Math.floor(Math.random()*12);//num will integer and num<12;
console.log(num);
num=Math.round(Math.random()*14+6);//num will integer and 6=<num<=20;
console.log(num);

//date_time related methods.
var date= new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());//getDate(), getDay(), getHours(), getMunites,
