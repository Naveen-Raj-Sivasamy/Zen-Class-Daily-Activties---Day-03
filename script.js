
//question 01: Compare two JSON have the same properties without order.
//a. let obj1 = {name: "Person1", age:5};
//b. let obj2 = {age:5, name: "Person2"};


let obj1 = {name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

//we cannot compare two objects straight away here. So, convert these into strings first and then compare them

let match01 = JSON.stringify(obj1);
let match02 = JSON.stringify(obj2);

if (match01 === match02) {
    console.log("Two JSON have the same properties");
} else {
    console.log("Two JSON do not have the same properties");
}

//-----------------------------------------






























//create XMLHTTP Request

//step 01 (Object to be sent from Client side)
var myrequest = new XMLHttpRequest();

//step 02 (request to server side using the object we created in step 01)
myrequest.open("GET","https://restcountries.com/v3.1/all",true)

//step 03 (Creating a bridge to server to send our request in step 02)

myrequest.send();

//Our request procedure is done now. Here after the response from server side

//step 04 () Server Response

//Onload - It is a event that will load our response from server into the function and give us. So, we need function to use this event

//function - Going to be anonymous function here for now

//response

// myrequest.onload = function()
// {
//   var data = myrequest.response;
//   console.log(data)  
// }

//now commit all these and see website and console

//result will be raw. because we haven't applied parse json in our code

//so do apply parse in our code. So I commented above code and mentioned below with parse added

myrequest.onload = function()
{
  var data = myrequest.response;
 // console.log(data)
  var result = JSON.parse(data); //this parse will load data nicely 
  console.log(result)

  console.log(result[230].area);//to print particular area value

  console.log(result[0].name.common)

  //how to access multiple values? for loop

    for(var i=0; i<result.length; i++)
    {
        console.log("country: "+result[i].name.common+" ; Capital: "+result[i].capital+" ; Flag: "+result[i].flags.png)
    }

}