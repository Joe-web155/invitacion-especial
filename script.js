function openEnvelope() {
    document.querySelector('.envelope').style.display = 'none';
    document.getElementById('card').classList.add('open');
    createAnimations();
}

function responder(aceptar) {
    const resultadoElement = document.getElementById('result');
    const formElement = document.getElementById('form');
    
    if (aceptar) {
        resultadoElement.innerHTML = "¡Qué emoción! Me encantaría tener una cita contigo.";
        formElement.innerHTML = `
            <h3>Detalles de la cita:</h3>
            <form onsubmit="confirmarCita(event)">
                <label for="fecha">Fecha:</label>
                <input type="date" id="fecha" required><br><br>
                <label for="hora">Hora:</label>
                <input type="time" id="hora" required><br><br>
                <label for="lugar">Lugar:</label>
                <input type="text" id="lugar" required><br><br>
                <button type="submit">Confirmar cita</button>
            </form>
        `;
    } else {
        resultadoElement.innerHTML = "Entiendo. Gracias por tu honestidad. Espero que podamos seguir siendo amigos.";
        formElement.innerHTML = '';
    }
}

function confirmarCita(event) {
    event.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const lugar = document.getElementById('lugar').value;
    const resultadoElement = document.getElementById('result');
    resultadoElement.innerHTML = `¡Genial! Nuestra cita está confirmada para el ${fecha} a las ${hora} en ${lugar}. ¡Estoy emocionado!`;
    document.getElementById('form').innerHTML = '';
}

function createAnimations() {
    for (let i = 0; i < 5; i++) {
        createHeart();
        createStar();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(star);
}
