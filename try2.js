//"use strict";

//global variable
var k="hello";
function testing()
{
	//local variable
	var p="bye";

	//also a global variable bcoz no declaration
	//dont do this.
	q=1;
}
testing();


var string ="hello,hello i am dishi";
console.log(string.length);
console.log(string.split(",")); // split returns array
console.log(string.replace("hello","lol"));  //only replaces the first matching word and not multiple.


//Array definition
var array=[1,2,3,4];
var array2=[6,7,8,9];
console.log(array.toString());
console.log(array.toString().split(",")); // convert string to array
array[1]=5;

//Delete element from array
console.log(array.splice(0,2)); //from 0th pos it is removing 2 elements and returns deleted elements

console.log(array);

//Insert into array using splice
console.log(array.splice(0,0,2,3)); // at postion 0 we r removing 0 elements and inserting 2 and 3  at 0
console.log(array);

console.log(array.indexOf(3)); // returns pos of 1st occurance of that value
console.log(array.indexOf(5));

console.log(array.push(5));   // returns the pushed element
console.log(array);
console.log(array.pop());  // returns the popped element
console.log(array);

console.log(array.concat(array2));
console.log(array2.concat(array).sort());
//console.log(array2.swapped());                 write this correctly

//LOOPS
for(var i=array.length-1;i>=0;i--)
{
	console.log(array[i]);
}


if(array[1]==10)
{
	console.log("I am 10");
}
else
{
	console.log("I am not 10");
}


var j=0;
while(j<array.length)
{
	console.log(array[j]);
	j++;
}

/*
//Implement any sort algo using js
//array.sort();
var arr=[3,2,1,4];
for(var i=0;i<arr.length;i++)
{	
	var key=arr[i];
	while(i>0&&arr[i-1]>arr[i])
	{
		var temp=arr[i];
		arr[i]=arr[i-1];
		arr[i-1]=temp;
	}
}
//console.log(arr);

//hamming distance
var a="101";
var b="001"
function hamm()
{
	var x=0;
	for(var i=0;i<a.length;i++)
	{
		if(a[i]!=b[i])
			x++;
	}
	console.log(x);
}
hamm();*/



//JSON Javascript Object Notation
var myjson={name:"Dishi"};
myjson.age=21;
console.log(myjson);
console.log(JSON.stringify(myjson));

var jsonstring='{"name":"Dishi"}';
console.log(JSON.parse(jsonstring));