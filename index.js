// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name){
  cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    return cats.concat(name);
  }
  const modifiedCats = appendCat("Broom");
  
function prependCat(name) {
    return [name, ...cats];
  }
  
  const modifiedCats1 = prependCat("Arnold");

  function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }
  
  const modifiedCats2 = removeLastCat();
  
function removeFirstCat() {
    return cats.slice(1);
  }
  
  const modifiedCats3 = removeFirstCat();
/*const destructivelyAppendCat = [...cats];
destructivelyAppendCat.push("Ralph");
destructivelyAppendCat;
// console.log(destructivelyAppendCat); */