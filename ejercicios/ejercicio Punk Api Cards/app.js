const $ = (id) => document.getElementById(id);

const cardsBeer = async()=>{
    const response = await  fetch('https://api.punkapi.com/v2/beers')
    const data =  await response.json()

    let aux = ''
    for (const info of cardsInfo) {
        aux =  `<div id="card" class="card">
        <h2>${data.name}</h2>
        <img
          src="${data.image_url}"
          alt="beer"
          height="180"
        />
        <p class="card__description">
        ${data.description}
        </p>
      </div>`
    }
    $(beers).innerHTML = aux
}
