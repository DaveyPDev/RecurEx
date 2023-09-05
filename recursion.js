/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1

  }
  return nums.reduce((acc, num) => acc * num, 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let maxLength = 0
  for (let word of words) {
    if(word.length > maxLength) {
      maxLength = word.length
    }
  }
  return maxLength
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let result = '' 
  for (let i = 0; i < str.length; i += 2) {
    result += str[i]
  }
  return result
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('')
  return str === reversed
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  return arr.indexOf(val)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split('').reverse().join('')
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];

  function gather(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        strings.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        gather(obj[key]);
      }
    }
  }

  gather(obj);
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
