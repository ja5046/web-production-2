//Make your own array of 5 objects with at least 4 keys
// This one only has 3 right now!
let mySentences = [{'noun': 'cobweb','afterlife','cemetery'}{'monster': 'boogeyman','mummy','zombie'}{'adjective': 'spooky','terrifying','nerve-racking'}{'verb': 'ran','float','sleep'}]


function showElements(array) {
  let container = O('object-container')
  let story = ''
  //clear out the inner HTML in case we call this function again
  for (let i=0; i<array.lenght(); i++){
    story += array[i] + ''
  }
  container.innerHTML = story
  //use a for loop to add the items from the array - you can just add it to the innerHTML, or use the createDiv function below and .appendChild to the container
}

showElements(mySentences)



function addSentence() {
  // add inputs for your own keys
  let nounInput = O('key-1')
  let monsterInput = O('key-2')
  let adjectiveInput = O('key-3')
  let verbInput = O('key-4')

  // change these to your own keys
  let noun = nounInput.value
  let adjective = adjectiveInput.value
  let verb = verbInput.value
  let monster = monsterInput.value
  // create a new object - again, change this to your own keys
  let item = {noun: noun, monster: monster, adjective: adjective, verb: verb}
  mySentences.push(item)
  console.log('my sentences: ', mySentences)
  //if we don't call showElements again, it won't display the new one
  showElements(mySentences)
  //zero out the inputs
  nounInput.value = ''
  monsterInput.value = ''
  adjectiveInput.value = ''
  verbInput.value = ''
}

function createDiv(object) {
  let div = document.createElement("div")
  //you could add more properties to the textContent, or set its innerHTML to properties
  div.textContent = 'The ' + object.adjective + ' ' + object.noun + ' ' + object.verb
  return div
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
