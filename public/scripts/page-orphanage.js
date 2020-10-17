const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Create map
const map = L.map('mapid', options).setView([lat, lng], 13)

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// Setting a map marker

L.marker([lat, lng], { icon })
    .addTo(map)

//Image Gallery

function selectImage(event) {
    const button = event.currentTarget

    //Remover classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //Selecionar a img clicada 

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //Atualizar o container de img
    imageContainer.src = image.src
    //Add a classe .active para o botão selecionado

    button.classList.add('active')

}