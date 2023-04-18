(function(){

        /* ---------------------------------- Appel de la galerie */
    console.log('début carrousel')
    let bouton = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector('.carrousel__figure');

    /* ---------------------------------- Variable de la galerie */

    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll("img")
    console.log('galerie__img:' + galerie__img.length )
    bouton.addEventListener('mousedown',function(){
        console.log('Ouvrir la boite modale')
        carrousel.classList.add('carrousel--activer')
        ajouter_img_dans_carrousel()
    })
     /**https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      * 
      * Propriété classList.contains('carrousel--activer') permet de vérifier si le carrousel est ouvert
      */


    carrousel__x.addEventListener('mousedown',function(){
        carrousel.classList.remove('carrousel--activer')
    })
    /** ajouter_img_dans_carrousel
     * Ajouter l'ensemble des images de la galerie dans la boite modale carrousel
     */

    function ajouter_img_dans_carrousel(){
        for (const elm of galerie__img){

            //console.log(elm.getAttribute('src'))
            let img = document.createElement('img');
            
            img.setAttribute('src', elm.getAttribute('src'))
            console.log (img.getAttribute('src'))
            carrousel__figure.appendChild(img)
        }
    }

})()