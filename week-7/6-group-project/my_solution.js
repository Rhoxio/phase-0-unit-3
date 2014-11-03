 // U3.W7: JavaScript Telephone

// My role in the group is:

// User Story Generator/Put it All Together

// Here is my part of the challenge:


// User Stories:
// I want a function called sum that adds all of the elements in an array.
// I want a function called mean that averages an array.
// I want a function called median that gets the median of an array.

function sum(array) {
  var total = 0;
  for (var x in array) {
    total += array[x];
  }
  return total;
};



//Mean
//User story: As a user I want to get the mean average of all numbers in a given set.

function mean(array) {
  return sum(array)/array.length;
};



// Median
// User story: As a user I want to get the median value of all numbers in a given set.

function median(array) {
  sortedArray =  array.sort(function(a, b){return a-b});
  len = sortedArray.length;
  if (len % 2 !== 0)
    {
      return sortedArray[(len-1)/2];
    }
  else
    {
      return Math.floor((sortedArray[len/2] + sortedArray[len/2-1])/2); 
    }
  }

//Everything looks to be working correctly. I added driver code just to make sure that Median is calculated the correct way. 

  console.log("____________________")
  console.log(sum([1,4,10]))
  console.log(sum([2,3,4,5,6]))
  console.log(mean([1,4,10]))
  console.log(mean([2,5,7,8,9,3]))
  console.log(median([1,4,10,20,3]))
  console.log(median([3,5,9,2,8,10]))

  

