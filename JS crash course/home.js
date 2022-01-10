console.log("privet");
//alert("kekw")
//var someShit=455
//console.log(someShit);
//var age = prompt('What is your age?')
//document.getElementById('someText').innerHTML = age
//console.log(someShit)
var numb1 = 5;
var numb2 = 5;
function kekuriy(numb1,numb2){
    var result = numb1 + numb2;
    console.log(result);
}
//kekuriy("11","01");
function CallMyName(){
    let name = prompt("what is your name?");
    console.log("hello",name);
}
//CallMyName();
//console.log(numb1);
var num = 0; 
/*while (num < 100)   {
    num +=1;
    console.log(num);
}

for (let num=0; num<100; num++){
    console.log(num);
}
*/
fruits="banana\napple";

console.log(fruits.length);
console.log(fruits.indexOf("an"));
console.log(fruits.slice(2,6));
console.log(fruits.replace("ban", "razban"));
console.log(fruits.toUpperCase(fruits))
console.log(fruits.toLowerCase(fruits))
let fruits1 = ["banana", "apple","peach", "plum"];
let fruits2 = new Array("banana", "apple","peach", "plum");
alert(fruits2[1]);
for (let i=0; i<fruits2.length; i++)
    console.log(fruits2[i]);
console.log(fruits2.join(" * "))
console.log(fruits2.pop(), fruits2);
console.log(fruits2.push("kiwi"), fruits2);
fruits2[fruits2.length] = "pear";
console.log(fruits2);
console.log(fruits2.reverse());
console.log(fruits2.slice(1,4)); 

let someNumbers = [5, 10, 15, 25, 155,2,3,144,228,322,1488,1453,1492,1812,1941,1980,1984,473];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a,b) {return a-b}));
console.log(someNumbers.sort(function(a,b) {return b-a}));

let emptyArray = new Array();
for (let num =0; num <10 ; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

let student = {
    first: "andruxa",
    last: "mickeytayson",
    age: 25,
    height:180,
};

console.log(student.first);
console.log(student.last);
student.first = "Andrushe4ka";
console.log(student.first);

// && = AND,  || = OR

var age = prompt("what is your age");

if ((age>=18)&&(age<+35)){
    status = "target demo";
    console.log(status);    
}
else    {
    status = "not my audience";
    console.log(status);
}



