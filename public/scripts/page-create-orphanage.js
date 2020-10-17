//Create map
const map = L.map('mapid').setView([-23.1791, -45.8872], 13)

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remover icon
    marker && map.removeLayer(marker)


    //Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Photos Upload

function addPhotoField(){
    // Pegar o container de foto e duplicar #images
   const container = document.querySelector('#images')
    // Duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Clonar a última img add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //Verifica se campo está vazio
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    
    // Limpa o campo antes de add
    newFieldContainer.children[0].value = ""
    // Add o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1 ){
        // Limpar o valor
        span.parentNode.children[0].value =""
        return
    }
    // Deletar o campo
    span.parentNode.remove();
}

//Troca do sim e não 

function toggleSelect(event) {
    //Tirar a classe .active
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    //Colocar a classe .active no button clicado
    const button = event.currentTarget
    button.classList.add('active')

    //Atualizar input hidden com valor escolhido
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //Verificar se sim ou não 
    input.value = button.dataset.value
    
}