/**
 * DOM
 */
const nav = document.querySelector('nav');
const containerAccueil = document.querySelector('section.accueil');
const containerParent = document.querySelector('section.accueil div.container');

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const img = document.querySelector('img');

/**
 * AOS
 */
AOS.init();

/**
 * Datas
 */
const datas = {
    titres: [
        "VALEURS",
        "NÉCÉSSITÉS",
        "INTÉGRATION",
        "RESPONSABILITÉ",
        "EXCELLENCE"
    ],
    resume: [
        "La mise en lumière de ses propres valeurs",
        "La confrontation avec les nécessités extérieures",
        "L'intégration des actions entre valeurs et nécessités",
        "La prise de responsabilité",
        "La mise en action pour l'excellence d'un engagement partagé"
    ], 
    imgs: [
        "illustration1.png",
        "illustration2.png",
        "illustration3.png",
        "illustration4.png",
        "illustration5.png",
    ]
}

/**
 * Changements timer
 */
let i = 0;
initContainer();
const time = setInterval(() => {

    i == 4 ? i = 0 : i++;
    styleContainer();

}, 5000);


/**
 * Functions
 */

/**
 * Première datas
 */
function initContainer()
{
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('data-aos', 'fade-right');
    row.setAttribute('data-aos-duration', '3000');
    
    
    nav.style.background = "linear-gradient(90deg, rgba(60,161,223,1) 5%, rgba(255,102,102,1) 100%)";
    containerAccueil.style.background = "linear-gradient(90deg, rgba(60,161,223,1) 5%, rgba(255,102,102,1) 100%)";

    row.innerHTML = 
    `
    <div data-aos="fade-right" name="col" class="col-12 col-md-6">
        <img src="assets/img/${datas.imgs[i]}"  height="600px"/>
    </div>

    <div  name="col" class="col-12 col-md-6">
        <h1>${datas.titres[i]}</h1>
        <h2>${datas.resume[i]}</h2>
    </div>
    `
    containerParent.appendChild(row);

    transitionh2(h2, 'h2');
    mediaQueriesHome()
}

/**
 * Changement de style et de datas
 */
function styleContainer()
{
    if(i == 1 || i == 3)
    {
        nav.style.background = "linear-gradient(90deg, rgba(255,102,102,1) 5%, rgba(60,161,223,1) 100%)";
        containerAccueil.style.background = "linear-gradient(90deg, rgba(255,102,102,1) 5%, rgba(60,161,223,1) 100%)";

        deleteContainerChilds();

        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('data-aos', 'fade-left');
        row.setAttribute('data-aos-duration', '3000');

        if (document.body.clientWidth > 767)
        {
            row.innerHTML = 
            `
            <div name="col" class="col-12 col-md-6">
                <h1>${datas.titres[i]}</h1>
                <h2>${datas.resume[i]}</h2>
            </div>

            <div name="col" class="col-12 col-md-6">
                <img src="assets/img/${datas.imgs[i]}"  height="600px"/>
            </div>
            `   
        }
        else{
            row.innerHTML = 
            `
            <div name="col" class="col-12 col-md-6">
                <img src="assets/img/${datas.imgs[i]}"  height="600px"/>
            </div>

            <div name="col" class="col-12 col-md-6">
                <h1>${datas.titres[i]}</h1>
                <h2>${datas.resume[i]}</h2>
            </div>
            `   
        }
            containerParent.appendChild(row);

            transitionh2(h2, 'h2');
            mediaQueriesHome()
        
    }

    if (i == 0 || i == 2 || i == 4){
        nav.style.background = "linear-gradient(90deg, rgba(60,161,223,1) 5%, rgba(255,102,102,1) 100%)";
        containerAccueil.style.background = "linear-gradient(90deg, rgba(60,161,223,1) 5%, rgba(255,102,102,1) 100%)";

        deleteContainerChilds();

        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('data-aos', 'fade-right');
        row.setAttribute('data-aos-duration', '3000');
        row.innerHTML = 
        `
        <div name="col" class="col-12 col-md-6">
            <img src="assets/img/${datas.imgs[i]}"  height="600px"/>
        </div>
    
        <div name="col" class="col-12 col-md-6">
            <h1>${datas.titres[i]}</h1>
            <h2>${datas.resume[i]}</h2>
        </div>
        `
        containerParent.appendChild(row);

        transitionh2(h2, 'h2');
        mediaQueriesHome()
        
    }
}

/**
 * Supprime l'enfant du parent container pour le remplacer
 */
function deleteContainerChilds()
{
    const rowDelete = containerParent.querySelector('div.row');
    containerParent.removeChild(rowDelete);
}

/**
 * Effet de transition
 */

function transitionh2(el, selector)
{
    el = document.querySelector(selector);

    const timer = setTimeout(() => {
        el.style.color = "white";
        el.style.border = "solid 2px white";
        el.style.transition = "color 7s, border 7s";
        
    }, 100);  
}

/**
 * Media Queries
 */
function mediaQueriesHome()
{
    if (document.body.clientWidth < 767)
    {
        containerAccueil.style.height = "600px";
        document.querySelector('img').style.height = "400px";
        document.querySelector('h1').style.fontSize = "20px";
        document.querySelector('h1').style.marginTop = "10px";
        document.querySelector('h2').style.fontSize = "15px";
        document.querySelector('h2').style.marginTop = "10px";
        
    }
}














