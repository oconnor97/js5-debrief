
const names = ["Belinda", "Slammy" , "LeRoy" , "Reggie" , "Hanna" , "Hareg" , "Safiya" , "Safi" , "Shaquae" , "Amanda"];
const btn = document.querySelector('button');
const clearButton = document.getElementById('clear-btn');
const numOfNamesButton = document.getElementById('numofnames-btn');
const nameBox = document.getElementById("name-box");

function getMultipleRandom(names, num) {
  const shuffled = [...names].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function getNames(event){
  nameBox.innerHTML= getMultipleRandom(names, 4);
}
btn.onclick = getNames;


function clearNames(event){
  nameBox.hidden = true ;
}
clearButton.onclick = clearNames;


function desiredNumOfNames(){
let numOfNames = Number(window.prompt("Please enter the number of desired names"));
  if (numOfNames >= 1 && numOfNames <=10) {
    nameBox.innerHTML = getMultipleRandom(names, numOfNames);
  }else{
    alert("Please enter a number between 1 and 10.")
  }
}

numOfNamesButton.onclick = desiredNumOfNames;






 // Practice Function
// const btn = document.querySelector('button');
//
// function greet(event) {
//   nameBox.innerHTML = 'hi'
// }
//
// btn.onclick = greet;
