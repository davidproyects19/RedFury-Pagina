/*___________________*/

window.addEventListener('scroll', function(){
    var header = document.querySelector('.encabezado');
    header.classList.toggle('abajo',window.scrollY>0);
})