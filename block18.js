// UNIT TEST 1
// - make sure it takes two parameters that are numbers
//     - if the parameters are not numbers throw error
// - make sure param1 and param2 outputs the correct product
// - make sure the product is also a number

// UNIT TEST 2
// - expect two arrays as parameters
//     - throw errors if not correct
// - concat the arrays and sort by ascending
// - create a loop that returns anything with % > 0 and push to new array
// - if there are duplicate numbers remove those

// FUNCTIONAL TEST
// - As Guest
//     - make sure item is in shopping if not alert them shopping cart is empty
//     - if shopping cart has item check to see if user is logged in
//     - if not logged in ask user if they want to create an account
//     - if yes then show user the account creation form
//     - if no then allow them to manually enter in their shipping information
// - As Logged in user
//     - make sure item is in shpping car if not alert them shopping cart is empty
//     - if shopping cart has item check to see if user is logged in
//     - if logged in pull their saved information from database and pre fill it
//     - ask the user to verify shipping information before proceeding
//     - if user makes edits ask if they would like to save edits to account
//     - if no edits then proceed through check out as normal

const multipaction = {
  product: (a, b) => {
    return a * b;
  },
};

const concatOdds = {
  concatOdds: (param1, param2) => {
    let newArr = [...param1, ...param2];
    let answerArr = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] % 2 > 0) {
        answerArr.push(newArr[i]);
      }
    }
    answerArr.sort((a, b) => a - b);
    return answerArr;
  },
};

module.exports = multipaction;
module.exports = concatOdds;
