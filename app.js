// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Este código resuelve el problema del Amigo Secreto.
// Creado por: Jose Caldera - Desafío de Código - Techlife - 12/08/2025

// Array para guardar los amigos que se van agregando.
let amigos = [];

// Función para añadir un amigo a la lista.
// Se llama desde el botón "Añadir" en el HTML.
function agregarAmigo() {
    // Tomo el valor que el usuario escribió en el campo con id "amigo".
    let nombreAmigo = document.getElementById('amigo').value;

    // 1. Reviso si el campo de texto no está vacío.
    if (nombreAmigo == '') {
        alert('Por favor, escribe un nombre antes de añadir.');
        return; // Detengo la función si no hay nombre.
    }

    // 2. Reviso si el nombre ya existe en la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Si encuentro el nombre en la lista, muestro una alerta y detengo la función.
        if (amigos[i].toLowerCase() === nombreAmigo.toLowerCase()) {
            alert('Ese nombre ya fue agregado, por favor intenta con otro.');
            document.getElementById('amigo').value = ''; // Limpio el campo para comodidad.
            return; 
        }
    }

    // Añado el nuevo amigo a mi array "amigos".
    amigos.push(nombreAmigo);

    // Muestro en la pantalla la lista actualizada.
    actualizarLista();

    // Limpio la caja de texto para que se pueda escribir otro nombre.
    document.getElementById('amigo').value = '';
}

// Función para realizar el sorteo.
// Se llama desde el botón "Sortear amigo" en el HTML.
function sortearAmigo() {
    // NUEVO: Reviso si hay al menos 2 personas para poder sortear.
    if (amigos.length < 2) {
        alert('¡Necesitas agregar al menos 2 amigos para poder sortear!');
        return; // Detengo la función.
    }

    // Genero un número al azar. El número irá de 0 hasta la cantidad total de amigos.
    let numeroSecreto = Math.floor(Math.random() * amigos.length);

    // Con el número al azar, elijo un nombre de la lista.
    let amigoSecreto = amigos[numeroSecreto];

    // Muestro quién fue el ganador en el elemento con id "resultado".
    document.getElementById('resultado').innerHTML = `¡Tu amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}

// Función que "dibuja" la lista de amigos en la pantalla.
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Primero borro la lista para no repetir nombres.

    // Recorro mi array de amigos uno por uno.
    for (let i = 0; i < amigos.length; i++) {
        // Por cada amigo, creo un elemento <li> y lo agrego al HTML.
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaHTML.appendChild(nuevoAmigo);
    }
}

// Función extra para reiniciar el juego sin recargar la página.
function reiniciar() {
    amigos = []; // Vacío la lista de amigos.
    document.getElementById('listaAmigos').innerHTML = ''; // Limpio la lista en pantalla.
    document.getElementById('resultado').innerHTML = ''; // Limpio el resultado.
}// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Este código resuelve el problema del Amigo Secreto.
// Creado por: Jose Caldera - Desafío de Código - Techlife - 12/08/2025

// Array para guardar los amigos que se van agregando.
let amigos = [];

// Función para añadir un amigo a la lista.
// Se llama desde el botón "Añadir" en el HTML.
function agregarAmigo() {
    // Tomo el valor que el usuario escribió en el campo con id "amigo".
    let nombreAmigo = document.getElementById('amigo').value;

    // 1. Reviso si el campo de texto no está vacío.
    if (nombreAmigo == '') {
        alert('Por favor, escribe un nombre antes de añadir.');
        return; // Detengo la función si no hay nombre.
    }

    // 2. Reviso si el nombre ya existe en la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Si encuentro el nombre en la lista, muestro una alerta y detengo la función.
        if (amigos[i].toLowerCase() === nombreAmigo.toLowerCase()) {
            alert('Ese nombre ya fue agregado, por favor intenta con otro.');
            document.getElementById('amigo').value = ''; // Limpio el campo para comodidad.
            return; 
        }
    }

    // Añado el nuevo amigo a mi array "amigos".
    amigos.push(nombreAmigo);

    // Muestro en la pantalla la lista actualizada.
    actualizarLista();

    // Limpio la caja de texto para que se pueda escribir otro nombre.
    document.getElementById('amigo').value = '';
}

// Función para realizar el sorteo.
// Se llama desde el botón "Sortear amigo" en el HTML.
function sortearAmigo() {
    // NUEVO: Reviso si hay al menos 2 personas para poder sortear.
    if (amigos.length < 2) {
        alert('¡Necesitas agregar al menos 2 amigos para poder sortear!');
        return; // Detengo la función.
    }

    // Genero un número al azar. El número irá de 0 hasta la cantidad total de amigos.
    let numeroSecreto = Math.floor(Math.random() * amigos.length);

    // Con el número al azar, elijo un nombre de la lista.
    let amigoSecreto = amigos[numeroSecreto];

    // Muestro quién fue el ganador en el elemento con id "resultado".
    document.getElementById('resultado').innerHTML = `¡Tu amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}

// Función que "dibuja" la lista de amigos en la pantalla.
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Primero borro la lista para no repetir nombres.

    // Recorro mi array de amigos uno por uno.
    for (let i = 0; i < amigos.length; i++) {
        // Por cada amigo, creo un elemento <li> y lo agrego al HTML.
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaHTML.appendChild(nuevoAmigo);
    }
}

// Función extra para reiniciar el juego sin recargar la página.
function reiniciar() {
    amigos = []; // Vacío la lista de amigos.
    document.getElementById('listaAmigos').innerHTML = ''; // Limpio la lista en pantalla.
    document.getElementById('resultado').innerHTML = ''; // Limpio el resultado.
}
