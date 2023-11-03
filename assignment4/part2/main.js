const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const im=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']; /*define im as a constant list with the images*/

/* Declaring the alternative text for each image file */
const al=['eye','rock','flower','hyroglific','buttlerfly']; /*define al as a constant list with the alternative text for images*/

/* Looping through images */

for (let i = 0; i < 5; i++)  /*loop for 5 images */
{
const newImage = document.createElement('img');
newImage.setAttribute('src', './images/' + im[i]); /*list images located at /images/ folder */
newImage.setAttribute('alt', al[i]);/*list alt*/
thumbBar.appendChild(newImage);

newImage.addEventListener('click', ii=> {displayedImage.src=ii.target.src; displayedImage.alt=ii.target.alt;});  /*add event click to show image */

}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => 
{
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'light')  /*if button class is light then lighten image */
{
    btn.setAttribute('class','dark');  /*change class to dark */
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';  /*remove dark background color  */

 } 
else  /*if button class is dark then lighten image */
{
    btn.setAttribute('class','light');  /*change class to light*/
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.10)';  /*change background color darker */
}
});