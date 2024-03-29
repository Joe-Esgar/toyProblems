// Find the Parity Outlier
function findOutlier(integers) {
  //  create two place holder arrays to hold values
  let evenArray = [];
  let oddArray = [];
  // a for loop that runs each index of the integers parameter array
  for (let i = 0; i < integers.length; i++) {
    // conditional statements that push the single odd or even value into its own array
    if (integers[i] % 2 === 0) {
      evenArray.push(integers[i]);
    } else {
      oddArray.push(integers[i]);
    }
  }
  //  conditional statement that finds the array with the single value and returns said value
  if (oddArray.length === 1) {
    return oddArray[0];
  } else {
    return evenArray[0];
  }
}

// Regex validate pin code
function validatePIN(pin) {
  // a regular expression that captures all numeric values
  let regex = /[0-9]/gi;
  // if statement that catches any length that isn't the propper 6
  if (pin.length != 6) {
    return false;
  }
  // if the pin does not match the regex we return false
  var found = pin.match(regex);
  if (found.length != pin.length) {
    return false;
  }
  return true;
}

// Take a ten minute walk
function isValidWalk(walk) {
  var lat = 0;
  var lon = 0;
  if (walk.length != 10) {
    return false;
  } else {
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === "n") {
        lat += 1;
      }
      if (walk[i] === "s") {
        lat -= 1;
      }
      if (walk[i] === "e") {
        lon -= 1;
      }
      if (walk[i] === "w") {
        lon += 1;
      }
    }
    if (lat != 0 || lon != 0) {
      return false;
    } else {
      return true;
    }
  }
}

// Find the unique number
function findUniq(arr) {
  let first = arr[0];
  let other;
  let check;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != first) {
      other = arr[i];
    }
  }
  if (arr.indexOf(other) - arr.indexOf(first) > 1) {
    check = arr[1];
  } else {
    check = arr[other + 1];
  }
  if (first === check) {
    return other;
  } else {
    return first;
  }
}

// Greed is Good
function score(dice) {
  var sorted = dice.sort((a, b) => a - b);
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  var score = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) {
      count1 += 1;
    }
    if (dice[i] === 2) {
      count2 += 1;
    }
    if (dice[i] === 3) {
      count3 += 1;
    }
    if (dice[i] === 4) {
      count4 += 1;
    }
    if (dice[i] === 5) {
      count5 += 1;
    }
    if (dice[i] === 6) {
      count6 += 1;
    }
  }
  if (count1 > 0) {
    score += 1000 * Math.floor(count1 / 3) + 100 * (count1 % 3);
  }
  if (count2 > 0) {
    score += 200 * Math.floor(count2 / 3);
  }
  if (count3 > 0) {
    score += 300 * Math.floor(count3 / 3);
  }
  if (count4 > 0) {
    score += 400 * Math.floor(count4 / 3);
  }
  if (count5 > 0) {
    score += 500 * Math.floor(count5 / 3) + 50 * (count5 % 3);
  }
  if (count6 > 0) {
    score += 600 * Math.floor(count6 / 3);
  }

  return score;
}

//Pete, the baker
function cakes(recipe, available) {
  var arr = [];
  for (var prop in recipe) {
    if (!available[prop]) {
      arr.push(0);
    } else {
      arr.push(available[prop] / recipe[prop]);
    }
  }
  return Math.floor(Math.min(...arr));
}

// Most frequently used words in a text

function topThreeWords(text) {
  var noPunc = text.replace(/[.,?\/#!$%\^&\*;:{}=\-_\~()]/g, "").toLowerCase();
  var words = noPunc.split(" ");
  var occurances = {};
  var topThree = [];
  for (let i = 0; i < words.length; i++) {
    if (!occurances[words[i]]) {
      occurances[words[i]] = 1;
    } else {
      occurances[words[i]] += 1;
    }
  }
  delete occurances[""];
  delete occurances["'"];
  var numOcc = Object.keys(occurances);
  var numLoops = 3;
  if (numOcc.length < 3) {
    numLoops = numOcc.length;
  }
  for (let i = 0; i < numLoops; i++) {
    topThree[i] = Object.keys(occurances).filter(x => {
      return occurances[x] === Math.max.apply(null, Object.values(occurances));
    });
    topThree[i] = topThree[i][0];
    delete occurances[topThree[i]];
  }
  topThree = topThree.reduce((acc, val) => acc.concat(val), []);
  return topThree;
}

// find all permutations of a string
// I read alot of sources before I understood how to solve this particular problem and understand it
// A recursive solution is the one that made the most sense to me in the end.

function permutations(string) {
  // array storage for values
  var allPermutations = [];
  // test case for single length strings. Is actually the end point for recursion
  if (string.length === 1) {
    allPermutations.push(string);
    return allPermutations;
  } else {
    // run a for loop over the length of the string
    for (var i = 0; i < string.length; i++) {
      // variable that holds the first char of the string
      var first = string[i];
      // others is a concat of the first char to the char before i and the other characters
      var others = string.substring(0, i) + string.substring(i + 1);
      // otherPermutations holds the results of the recursively ran function with the remaining string char's passed in
      var otherPermutations = permutations(others);
      // looping over the otherPermutations array, we push the concatenated values of the current first value and the current value of otherPermutations if that value is not currently in the allPermutations array
      for (var k = 0; k < otherPermutations.length; k++) {
        if (allPermutations.includes(first + otherPermutations[k]) != true) {
          allPermutations.push(first + otherPermutations[k]);
        }
      }
    }
  }
  return allPermutations;
}

// Play a hand of equal to 24! Params are numbers ranging from 1-13.
// You must use each param only once. If any possible operations using only +-/* can return 24 you
// must return one of those solutions.

function equalTo24(a, b, c, d) {
  var one;
  var two;
  var three;
  var four;
  var possiblePairs = [
    [a, b, c, d],
    [a, c, b, d],
    [a, d, c, b],
    [a, c, d, b],
    [a, d, b, c],
    [a, b, d, c],
    [b, c, a, d],
    [b, c, d, a],
    [b, a, d, c],
    [b, a, c, d],
    [b, d, a, c],
    [b, d, c, a],
    [d, a, c, b],
    [d, a, b, c],
    [d, b, a, c],
    [d, b, c, a],
    [d, c, d, a],
    [d, c, a, d],
    [c, a, b, d],
    [c, a, d, b],
    [c, b, d, a],
    [c, b, a, d],
    [c, d, a, b],
    [c, d, b, a]
  ];
  var operators = "++-";
  function permutations(string) {
    var allPermutations = [];
    if (string.length === 1) {
      allPermutations.push(string);
      return allPermutations;
    } else {
      for (var i = 0; i < string.length; i++) {
        var first = string[i];
        var others = string.substring(0, i) + string.substring(i + 1);
        var otherPermutations = permutations(others);
        for (var k = 0; k < otherPermutations.length; k++) {
          if (allPermutations.includes(first + otherPermutations[k]) != true) {
            allPermutations.push(first + otherPermutations[k]);
          }
        }
      }
    }
    return allPermutations;
  }
  var allOperators = permutations("+/-")
    .concat(permutations("+-*"))
    .concat(permutations("++-"))
    .concat(permutations("++*"))
    .concat(permutations("++/"))
    .concat(permutations("--/"))
    .concat(permutations("-//"))
    .concat(permutations("--+"))
    .concat(permutations("--*"))
    .concat(permutations("**/"))
    .concat(permutations("**+"))
    .concat(permutations("**-"))
    .concat(permutations("*-/"));
  if (a + b + c + d === 24) {
    return `${a} + ${b} + ${c} + ${d}`;
  }
  if (a * b * c * d === 24) {
    return `${a} * ${b} * ${c} * ${d}`;
  }
  for (let i = 0; i < possiblePairs.length; i++) {
    one = possiblePairs[i][0];
    two = possiblePairs[i][1];
    three = possiblePairs[i][2];
    four = possiblePairs[i][3];
    for (let k = 0; k < allOperators.length; k++) {
      opOne = allOperators[k][0];
      opTwo = allOperators[k][1];
      opThree = allOperators[k][2];
      if (
        eval(`${one} ${opOne} ${two} ${opTwo} ${three} ${opThree} ${four}`) ===
        eval(24)
      ) {
        return `${one} ${opOne} ${two} ${opTwo} ${three} ${opThree} ${four}`;
      }
      if (
        eval(
          `(${one} ${opOne} ${two}) ${opTwo} ${three} ${opThree} ${four}`
        ) === eval(24)
      ) {
        return `(${one} ${opOne} ${two}) ${opTwo} ${three} ${opThree} ${four}`;
      }
      if (
        eval(
          `((${one} ${opOne} ${two}) ${opTwo} ${three}) ${opThree} ${four}`
        ) === eval(24)
      ) {
        return `((${one} ${opOne} ${two}) ${opTwo} ${three}) ${opThree} ${four}`;
      }
      if (
        eval(
          `${one} ${opOne} ${two} ${opTwo} (${three} ${opThree} ${four})`
        ) === eval(24)
      ) {
        return `${one} ${opOne} ${two} ${opTwo} (${three} ${opThree} ${four})`;
      }
      if (
        eval(
          `${one} ${opOne}(${two} ${opTwo}(${three} ${opThree} ${four}))`
        ) === eval(24)
      ) {
        return `${one} ${opOne}(${two} ${opTwo}(${three} ${opThree} ${four}))`;
      }
      if (
        eval(
          `(${one} ${opOne}${two}) ${opTwo} (${three} ${opThree} ${four})`
        ) === eval(24)
      ) {
        return `(${one} ${opOne}${two}) ${opTwo}  (${three} ${opThree} ${four})`;
      }
    }
  }
  return "It's not possible!";
}
equalTo24(6, 1, 3, 4);
