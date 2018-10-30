// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word+'s';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let array1 = [];
	for(var i = 0; i < array.length; i++)
    {
      array1.push(callback(array[i]));
    }
  return array1;
}


// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	var array2 = [];
  array.forEach(function(x) {
    array2.push(callback(x));
  });
  return array2;
}

// see for yourself if your forEach works!
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
//console.log(alphabet); 

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let array2 = forEach(array,callback);
  return array2;
}
//console.log(mapWith([0,1,2],addTwo));
//Extension 2
var add = function(a, b) { return a + b; }
function reduce(array, callback, initialValue) {
	let result = initialValue;
	array.forEach(function(el) {
    result = callback(result, el);
  });  
  return result;
}
//console.log(reduce([1,2,3],add,0));
//Extension 3
function exist(array,el)
{
  let ind = 0;
  for(let i=0;i<array.length;i++)
    {
      if(array[i]===el)
        {
          ind = 1;
        }
    }
  return ind;
}
function compare(array1,array2)
{
  let arrayresult = [];
  for(let i=0;i<array1.length;i++)
    {
      if(exist(array2,array1[i]))
        {
          arrayresult.push(array1[i]);
        }
    }
  return arrayresult;
}
//console.log(compare([1,2,3],[2,3,4])); // [2,3]
function intersection(arrays) {
	var arr = Array.from(arguments);
	return reduce(arr, compare, arr[0]);
}

 //console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function addEl(array1,array2)
{
  let l=array1.length;
  for(let i=0;i<array2.length;i++)
    {     
      if(exist(array1,array2[i])==0)
        {
          array1.push(array2[i]);
        }
    }
  return array1;
}
//console.log(exist([1,2,3],6));
//console.log(addEl([1,2,3],[5,6,1,4,2,3]));
function union(arrays) {
	var arr = Array.from(arguments);
	return reduce(arr, addEl, arr[0]);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let obj = {};
	for(let i =0;i<array1.length;i++)
    {
      if(callback(array1[i])===array2[i])
        {
          let str1 = String(array1[i]);
          let str2 = String(array2[i]);
          obj[str1] = str2;
        }
    }
  return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let obj={};
	for(let i = 0;i<arrVals.length;i++)
    {
      let str1 = String(arrVals[i]);
      let call = [];
      for(let j = 0;j<arrCallbacks.length;j++)
        {
          let f = arrCallbacks[j];
          call[j] = f(arrVals[i]);
        }
      let str2 = JSON.stringify(call);
      obj[str1] = str2;
    }
  return obj;
}

 console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }