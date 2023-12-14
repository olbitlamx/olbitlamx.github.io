(function(){
    window.addEventListener('scroll', function(){
        const secciones = document.querySelectorAll('.seccion');
        secciones.forEach(seccion => {
            const distancia = seccion.getBoundingClientRect().top;
            const pantalla = window.innerHeight / 1.3;
            if(distancia < pantalla){
                seccion.classList.add('mostrar');
            }
        });
    });
})();