let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let btn = document.getElementById('btn')

const randomeGatite = async() => {

    const response1 = await fetch('https://api.thecatapi.com/v1/images/search')
    const data1 = await response1.json()
    img1.src = data1[0].url;

    const response2 = await fetch('https://api.thecatapi.com/v1/images/search')
    const data2 = await response2.json()
    img2.src = data2[0].url;

  };
  randomeGatite()
  btn.addEventListener('click', randomeGatite)


  /*
  const randomeGatite = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        img1.src = data[0].url;
        
    })

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        img2.src = data[0].url;
        
    })


  };
  randomeGatite()
  btn.addEventListener('click', randomeGatite)
 */
