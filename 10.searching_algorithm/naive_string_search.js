

function naiveStringSearch(message, str) {
  let count = 0;
  
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if(str[j] !== message[i+j] ) break;
      if(j === str.length - 1) count++;
    }
  }
  
  return count;
}

console.log(naiveStringSearch("abc said hi at baa, in baa", "baa"));

// node naive_string_search.js