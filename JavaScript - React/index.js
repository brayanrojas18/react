/*const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'Click'

button.addEventListener('click', function () {
    title.innerText = 'Texto actualizado con JS'
    alert('Se realizo un click')
})

document.body.append(title)
document.body.append(button)*/

const elem = document.getElementById('div')

const user = {
    name: 'Brayan',
    age: 22
}

function printInfo({name}) {
    return '<h1>Hola ' + name + '</h1>'
} 

elem.innerHTML = printInfo(user)