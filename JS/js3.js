//IIFEs .Immediately function call.no need to call from outside of the function.
//var n=parseInt(prompt("Enter a number:"));
/*(function fun(num){
  var res;
  res=num*5;
  document.write(res);
})(n);*/
//functjon Expression.
/*var n2=function fun(num){
  var res;
  res=num*2;
  document.write(res);
}
n2(n);*/
// Array operations.
var students=["Jahid","Habib","Sojib", "Rofiq","Monir"];
console.log(students.length);
students.push("Rahim", "Shovo", "Fahim");//'unshift()' adds element at first of the array.
students.pop(); //'shift()' removes the element from the first position of the array.
console.log(students);
var id= new Array();
for(var i=1; i<=7; i++)
  id[i]=parseInt(prompt("Enter your Id:"));
id.splice(2, 4, "Jahid", 10); //splice(positon where add new elements, number of element to remove from last, elements to add).
document.write(id);
id.splice(3,6);//to remove the elements from 3 to 6 positions.
document.write("<br>" +id);
var newArray=id.slice(2,4);
var sort_stu=students.sort();//sorts the array alpha-betically.
sort_stu.reverse();// for sorting z-a;
document.write("<br>"+sort_stu);
//sorting number array.
var num=[23, 54, 78, 22, 12, 98, 32,43,];
num.sort(function(a,b){
  return a-b;//return b-a for sorting big to small.
});
document.write("<br>"+num);
