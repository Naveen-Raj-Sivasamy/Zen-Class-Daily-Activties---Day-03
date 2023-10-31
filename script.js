//Question 01

console.log("question 01: Compare two JSON have the same properties without order")
//question 01: Compare two JSON have the same properties without order.
//a. let obj1 = {name: "Person1", age:5};
//b. let obj2 = {age:5, name: "Person2"};


let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

//we cannot compare two objects straight away here. So, convert these into strings first and then compare them

if(JSON.stringify(obj1) === JSON.stringify(obj2))
{
    console.log("answer : "+"Two JSON have the same properties");
} 
else 
{
    console.log("answer : "+"Two JSON do not have the same properties");
}

console.log("----------------")
console.log("----------------")
console.log("----------------")
console.log("----------------")
//-----------------------------------------
// //question 02


// console.log("question 02: Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console")

//create XMLHTTP Request

//step 01 (Object to be sent from Client side)
var myrequest01 = new XMLHttpRequest();

//step 02 (request to server side using the object we created in step 01)
myrequest01.open("GET","https://restcountries.com/v3.1/all",true)

//step 03 (Creating a bridge to server to send our request in step 02)

myrequest01.send();

//step 04 () Server Response

myrequest01.onload = function()
{
  var data01 = myrequest01.response;
 // console.log(data)
  var result01 = JSON.parse(data01); //this parse will load data nicely 
  
  //how to access multiple values? for loop

  console.log("question 02: Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console") 
  console.log("Answer :");
    for(var i=0; i<result01.length; i++)
    {
        console.log(result01[i].name.common+" Flag: "+result01[i].flags.png)
    }

}


//------------------------------------------

// //------------------------------------------
// //question 03: ﻿﻿﻿﻿﻿﻿Use the same rest countries and print all countries names, regions, sub-region and populations


//create XMLHTTP Request

//step 01 (Object to be sent from Client side)
var myrequest02 = new XMLHttpRequest();

//step 02 (request to server side using the object we created in step 01)
myrequest02.open("GET","https://restcountries.com/v3.1/all",true)

//step 03 (Creating a bridge to server to send our request in step 02)

myrequest02.send();

//step 04 () Server Response

myrequest02.onload = function()
{
  var data02 = myrequest02.response;
 // console.log(data)
  var result02 = JSON.parse(data02); //this parse will load data nicely 
 
  //how to access multiple values? for loop
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")
    console.log("question 03: Use the same rest countries and print all countries names, regions, sub-region and populations") 
    console.log("Answer :");
    for(var i=0; i<result02.length; i++)
    {
        
        console.log("country Name: "+result02[i].name.common+" ; Region : "+result02[i].region+" ; Sub-Region : "+result02[i].subregion+" ; Population : "+result02[i].population)
    }

}