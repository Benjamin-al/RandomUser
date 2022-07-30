const container = document.querySelector("#result")

function traer(){
    fetch('https://randomuser.me/api/')//traemos la promesa
    .then(res => res.json())//resolvemos la promesa
    .then(data =>{
    container.innerHTML = `
        <img src="${data.results['0'].picture.large}" class="rounded-circle" id="img">
        <p>Nombre: ${data.results['0'].name.last}</p>`
    })
    event.preventDefault()
}