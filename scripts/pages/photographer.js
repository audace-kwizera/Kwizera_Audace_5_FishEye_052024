//Mettre le code JavaScript lié à la page photographer.html
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


async function init() {
    const { photographers, media } = await getPhotographers();
    const photographer = photographers.find(function(p) {
        return p.id === parseInt(id, 10)
    });
    console.log('photographer', photographer);
    const medias = media.filter(function(m) {
        return m.photographerId === parseInt(id, 10)
    });
    console.log('medias', medias)

    // lancer la page

    display(photographer)
    
   
}

function setPhotographerName(name) {
    const pn = document.getElementById('photographerName');
    pn.textContent = name;
}

function display(p) {
    // let html = '<p>' + p.name + '</p>';

    let html = `<p>${p.name}</p>`;

    const html2 = `
    
        <div class="photograph-header">
            <!-- Infos -->
            <div class="photographer_infos">${p.name} from ${p.city}</div>
            <!-- Button -->
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <!-- Avatar -->
            <div class="photographer_avatar"></div>
        </div>
    
    
    `

    const html3 = 
    '<div class="photograph-header">'
        + '<!-- Infos -->'
        + '<div class="photographer_infos">' + p.name + ' from ' + p.city + '</div>'
        + '<!-- Button -->'
        + '<button class="contact_button" onclick="displayModal()">Contactez-moi</button>'
        + '<!-- Avatar -->'
        + '<div class="photographer_avatar"></div>'
+ '</div>';
    const main = document.getElementById('main');
    main.innerHTML = html2;
    // setPhotographerName(p.name);

}
init();