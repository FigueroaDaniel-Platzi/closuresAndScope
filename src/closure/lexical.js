const myGlobal = 0;

function myFunction () {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal); // Puedo ocupar console.log con varias variables de este manera.

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();