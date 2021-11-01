// 1.task

function sum(...args) {
  let i = 0;

  for (let x of args) {
      if ( x > 0) {
          i += x;
      }

  }

  return i;
}


let positive = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

console.log(positive);

// 2.task

function newSum(...argss) {
    let j = 0;

    for (let y of argss) {
      j += y;
    }
    return j;
}

let allSum = newSum(10, 50, 6, 7, 8, 11, 6, 3, 9);

console.log(allSum);


// 3.task
function printname () {
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: 'true'
  }
  if (user.isloggedin === 'true') {
      return user.firstname + ' ' + user.lastname;

  }

  else {
      return 'false';
  }
}
let print = printname();
console.log(print);

// 4. task

function getMaxValue(numbers) {
    let maxValue = 0;
    for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    if (x > maxValue) {
        maxValue = x;
    }
    
}return maxValue;
}

  
console.log(getMaxValue([5, 10, 20, 100, 1500]));