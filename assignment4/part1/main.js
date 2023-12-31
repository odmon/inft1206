//document.querySelector("html").style.backgroundColor = "red";

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

//story base string
const storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

//array to insertx
const insertx=['Willy the Goblin','Big Daddy','Father Christmas'];

//array to insertx
const inserty=['the soup kitchen','Disneyland','the White House'];

//array to insertz
const insertz=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION


randomize.addEventListener('click', result);

function result() {

  //create randomnewStory with defined arrays
  let newStory=storyText; //define newStory as storybase string

  let xItem=randomValueFromArray(insertx); //xItem is a random value from insertx
  let yItem=randomValueFromArray(inserty); //yItem is a random value from inserty
  let zItem=randomValueFromArray(insertz); //zItem is a random value from insertz

  //chante text from insert xyz for random inserts
  newStory=newStory.replaceAll(':insertx:',xItem);  //change insertx from xItem
  newStory=newStory.replaceAll(':inserty:',yItem); //change insertx from yItem
  newStory=newStory.replaceAll(':insertz:',zItem);  //change insertx from zItem

  if(customName.value !== '') {
    const name = customName.value;

    
    newStory=newStory.replaceAll('Bob',name); //change Bob to input name in the story

  }

  if(document.getElementById("uk").checked) {
    const weightstone=Math.round(300*0.0714286); //const to calculate stones
    const weight = weightstone + ' stone';  //1 pound (lb) is equal to 0.0714286 stones (st).
    
    const temperaturecelsius=Math.round((94-32)*5/9);  //const to calculate celsius
    const temperature =  temperaturecelsius + ' centigrade';  //emperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

    newStory=newStory.replaceAll('300 pounds',weight ); //change weight
    newStory=newStory.replaceAll('94 fahrenheit',temperature);  //change temperature
  }

  story.textContent = newStory;  //return newStory
  story.style.visibility = 'visible';
}
