console.log('hello');

let x = 5;

x=5;
console.log(x)


let me = {name: 'Justin', adjectives: ['working out', 'rollerblading', 'playing video games', 'watching movies']}

function describeMe() {
  document.querySelector("#description").innerHTML = me.name + " enjoys " + getRandomItem(me.adjectives)
}


function changeColor() {
  document.querySelector('#color-change').style.backgroundColor = 'red'

}


let y = 0

function doMath() {
  //this automatically increases y by 1
  y++
  document.querySelector('#math').innerHTML = y
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
