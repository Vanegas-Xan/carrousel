(function(){
    console.log('début carrousel')
    let bouton = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll("img")
    console.log('galerie__img:' + galerie__img.length )
    bouton.addEventListener('mousedown',function(){
        console.log('Ouvrir la boite modale')
        carrousel.classList.add('carrousel--activer')
        ajouter_img_dans_carrousel()
    })
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
        }
    }

})()