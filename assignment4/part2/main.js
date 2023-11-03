const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const im=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']; /*define im as a constant list with the images*/

/* Declaring the alternative text for each image file */
const al=['eye','rock','flower','hyroglific','buttlerfly']; /*define al as a constant list with the alternative text for images*/

/* Looping through images */

for (let i = 0; i < 5; i++)
{
const newImage = document.createElement('img');
newImage.setAttribute('src', './images/' + im[i]); /*list images located at /images/ folder */
newImage.setAttribute('alt', al[i]);/*list alt*/
thumbBar.appendChild(newImage);

newImage.addEventListener('click', ii=> {displayedImage.src=ii.target.src; displayedImage.alt=ii.target.alt;});  /*add event click to show image */

}
/* Wiring up the Darken/Lighten button */
