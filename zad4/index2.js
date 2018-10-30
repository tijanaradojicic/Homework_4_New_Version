// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


function createFunction() {
	function f()
  {
    console.log("hello");
  }
  return f;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
	function f()
  {
    console.log(input);
  }
  return f;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    return counter;
    //console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
	function f(input)
  {
    return x+input;
  }
  return f;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1

//console.log(addByTwo(1));
// now call addByTwo with an input of 2



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
	 let one;
   function inner(input){
    if(!one)
    {
      one = func(input);
      return one;
    }
    else
    {
      return one;
    }
  }
  return inner;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

var counter;
function after(count, func) {
	counter = 0;
  function inner(){
    counter++;
    if(counter < count)
    {
    }
    else
    {
      return func();
    }
  }
  return inner;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	return setTimeout(func, wait);
}