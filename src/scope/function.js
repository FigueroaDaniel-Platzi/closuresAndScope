function greeting() {
  let userName = 'Anna';
  console.log(userName);

  if(userName === 'Anna') {
    console.log(`Hello ${userName}`);
  }
}

greeting();
console.log(userName); // ReferenceError: userName is not defined