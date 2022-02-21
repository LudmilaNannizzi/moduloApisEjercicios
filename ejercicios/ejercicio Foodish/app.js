const btnBiryan = document.getElementById('btn-biryani')
const btnBurger = document.getElementById('btn-burger')
const btnDosa = document.getElementById('btn-dosa')
const btnIdly = document.getElementById('btn-idly')
const btnPizza = document.getElementById('btn-pizza')
const btnAll = document.getElementById('btn-all')
const img = document.getElementById('img')

const biryan = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/biryani')
    const data = await response.json()
    img.src = data.image  
}
biryan()

btnBiryan.addEventListener('click', biryan)

const burger = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/burger')
    const data = await response.json()
    img.src = data.image  
}
btnBurger.addEventListener('click', burger)

const dosa = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/dosa')
    const data = await response.json()
    img.src = data.image  
}
btnDosa.addEventListener('click', dosa)

const idly = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/idly')
    const data = await response.json()
    img.src = data.image  
}
btnIdly.addEventListener('click', idly)


const pizza = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/pizza')
    const data = await response.json()
    img.src = data.image  
}
btnPizza.addEventListener('click', pizza)

const all = async() =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/')
    const data = await response.json()
    img.src = data.image  
}
btnAll.addEventListener('click', all)