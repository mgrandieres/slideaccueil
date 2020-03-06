/**
 * DOM
 */
const trait = document.getElementById('trait');
const li = Array.from(document.querySelectorAll('li a'));

window.addEventListener('load', () => {
    /**
     * Chemin du trait 
     */
    let i = 0;
    let widthMax = 260;
    const time = setInterval( () => {

        i = i + 2;
        trait.style.width = i+'px';
        if (i >= widthMax)
        {
            clearInterval(time);
        }

    }, 30)
})

/**
 * Clique li de la navbar 
 */
li.map( el => {
    el.addEventListener('click', () => {

        borderActive(li, el);
        
    })
})

/**
 * Style 
 */
function borderActive(array, el)
{
    array.map( el => {
        el.classList.remove('liactive');
    })
    
    el.classList.add('liactive')
}




