document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    }
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let slideIndex = 0;
showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', function() {
    showSlides(slideIndex -= 1);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-image');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

function mostrarConfiguracao() {
    var cpu = document.getElementById('cpu').value;
    var gpu = document.getElementById('gpu').value;
    var ram = document.getElementById('ram').value;
    var resultado = document.getElementById('resultado-simulador');
    resultado.innerHTML = 'Configuração: ' + cpu + ', ' + gpu + ', ' + ram;
}

function executarCodigo() {
    var codigo = document.getElementById('editor-codigo').value;
    try {
        var resultado = eval(codigo);
        document.getElementById('resultado-codigo').innerText = resultado;
    } catch (error) {
        document.getElementById('resultado-codigo').innerText = 'Erro: ' + error.message;
    }
}