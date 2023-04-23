const items = document.querySelectorAll('img'); /*place toutes less images dans un tableau */
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function SlideSuivante()
{
    items[count].classList.remove('active'); /*on retire la classe active de l'image courante*/
    if(count < nbSlide - 1)                     /*on vérififie qu'il reste des images (count < max images)*/
    {
        count++;
    }
    else
    {
        count = 0;                              /*plus d'images ... on quitte la boucle*/
    }
    items[count].classList.add('active');  /*le nouvel item/image obtient la classe active */
    console.log('count : ' + count);

}

suivant.addEventListener('click', SlideSuivante); /*on écoute le click sur le bouton suivant*/

function SlidePrecedente()  /*code pour la flèche de gauche*/
{
    items[count].classList.remove('active');
    if(count > 0)                                /*on vérififie qu'il reste des images (count > min images)*/
    {
        count--;
    }
    else
    {
        count = nbSlide - 1;
    }
    items[count].classList.add('active');
    console.log('count : ' + count);
}

precedent.addEventListener('click', SlidePrecedente); /*on écoute le click sur le bouton précédent*/

function keyPress(e){
    if(e.key === 'ArrowLeft' /*|| e.keyCode === 37*/){
        SlidePrecedente();
    }
    else if(e.key === 'ArrowRight' /*|| e.keyCode === 39*/){
        SlideSuivante();
    }
}
document.addEventListener('keydown', keyPress);