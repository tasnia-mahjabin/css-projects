const button=document.getElementById("color");
const body=document.body;
const colors=['purple','SlateBlue','powderblue','lavender','pink'] //variable
button.addEventListener('click',changeColor) //clickevent..click cc para
function changeColor()
{
    const colorindx=Math.floor(Math.random()*colors.length) //indx searching
    body.style.backgroundColor=colors[colorindx]
    document.getElementById('heading').innerHTML="Change the background color by clicking the following button"
}
changeColor()