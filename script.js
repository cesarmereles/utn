

// let name1 = 'cesar'
// let surname = 'mereles'
// let edad = 45


const user = {
    name: 'cesar',
    lastname:'mereles',
    age: 45
}

const users = [
    {
        name: 'cesar',
        lastname:'mereles',
        age: 45
    },
    {
        name: 'maria',
        lastname:'podkowa',
        age: 42
    },
    {
        name: 'nahiara',
        lastname:'mereles',
        age: 17
    },
    {
        name: 'ignacio',
        lastname:'mereles',
        age: 9
    }
]

// for(const user of users){
//     console.log('Nombre: '+ user.name.toUpperCase() + ' Apellido: '+user.lastname.toUpperCase() +' Edad:'+user.age )
// }
//let dato = prompt('Ingrese su nombre: ')
const titulo = document.getElementById('titulo')
console.log(titulo.innerText)
//titulo.innerText = "Hola estimado: "+dato

let contenedorHTML = document.getElementById('contenedor')
/*
contenedorHTML.innerHTML = "<h2>Incrustando texto</h2>"
for(let j=0; j<=10; j++){
    contenedorHTML.innerHTML += "<h2>Incrustando texto con bucle</h2>"
}
*/

for(let user of users){
    contenedorHTML.innerHTML+=`
    <div class="card">
        <h2>Nombre: ${user.name.toUpperCase()}</h2>
        <h2>Apellido:${user.lastname.toUpperCase()}</h2>
        <h2>Edad: ${user.age} </h2>
        <button class="color-boton">Leer mas</button>
    </div>
    ` 
    
}


const formulario = document.getElementById('formulario')
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(formulario.edadHTML.value)
})