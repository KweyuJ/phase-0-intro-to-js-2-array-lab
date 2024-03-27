// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}
function destructivelyPrependCat(Ralph) {
  cats.unshift(Ralph);
}
function destructivelyRemoveLastCat(Garfield) {
  cats.pop(Garfield);
}
function destructivelyRemoveFirstCat(Milo) {
  cats.shift(Milo);
}


function appendCat(Broom) {
  let modifiedCat = [...cats, Broom];
  return modifiedCat;
}
function prependCat(Arnold) {
   let modifiedCat = [Arnold, ...cats];
   return modifiedCat;
}
function removeLastCat() {
    let modifiedCat = cats.slice(0, -1);
    return modifiedCat;
}
function removeFirstCat() {
    let modifiedCat = cats.slice(1);
    return modifiedCat;
}
