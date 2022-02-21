
const btn = document.getElementById('btn')
const card = document.getElementById('card')

const randomZorro = async()=>{
   const response = await fetch('https://randomfox.ca/floof')
   const data = await response.json()
   
        let infoCard = 
        `
           <h1>Zorro</h1>
            <img id="img" src="${data.image}" alt="zorro" height="350">
        `
        card.innerHTML = infoCard;
    
}

btn.addEventListener('click', randomZorro)

/*const randomZorro = ()=>{
    fetch('https://randomfox.ca/floof')
    .then(response=>response.json())
    .then(data =>{
        let infoCard = 
        `
           <h1>Zorro</h1>
            <img id="img" src="${data.image}" alt="zorro" height="350">
        `
        card.innerHTML = infoCard;
        
    })
    
}*/