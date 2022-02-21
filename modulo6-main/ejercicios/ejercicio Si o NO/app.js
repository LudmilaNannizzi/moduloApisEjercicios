const btn = document.getElementById('btn')
const img = document.getElementById('img')
const res = document.getElementById('res')

const siOno = async() =>{
    const response = await fetch('https://yesno.wtf/api')
    const data = await response.json()
    img.src = data.image;
    res.innerHTML = data.answer
}
siOno()
btn.addEventListener('click', siOno)