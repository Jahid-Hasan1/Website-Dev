var num= 56.547845645;
console.log(num);
console.log(num.toFixed(2));
console.log(num.toPrecision(5));
console.log(Number("454"));//string to number conv.
console.log("Jahid" + " Hasan");
var fname,lname;
fname="Jahid"; lname=" Hasan";
console.log("This is " +fname+lname+ ",from Cumilla.");
console.log("Number of charecter in this string is= "+fname.length);
console.log(fname.charAt(2));
console.log(fname.concat(lname));
//var name= prompt("Enter your Name:");
//user input. works on browser only. User input is always string.
fname=fname.toUpperCase();
console.log(fname);
console.log(fname.slice(1,4));
console.log(2**3);//for power.
//retational operators: ==, ===, <, <=, >, >=, !=, !==;
var num1=30, num2="30";
console.log(num1==num2); // == check the value only.
console.log(num1===num2);// === check both value and data type.
// Vowel - Consonent with switch
/*var ch= prompt("Enter a charecter: ");
ch=ch.toLowerCase();
switch(ch){
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    document.write("This is Vowel.");
    break;
  default:
    document.write("This is Consonent.");
}*/
// Conditional or ternary operators.
/*var num=parseInt(prompt("Number: "));
num>0 ? document.write("Positive") : document.write("Nagetive");
var res=num>0 ? "Positive" : "Nagetive";
document.write(res);
//more than two conditions;
num>0 ? document.write("Positive") : num<0 ? document.write("Nagetive") : document.write("Zero");*/
