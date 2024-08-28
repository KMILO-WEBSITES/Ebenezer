window.addEventListener('load', function() {

    /*menu*/
    const menu=document.querySelector('.menu');

    const enlaces=document.querySelector('.link-menu');

    const barras=document.querySelectorAll('.menu span');

    menu.addEventListener('click',()=>{
        enlaces.classList.toggle('active');
        barras.forEach(child=>{child.classList.toggle('animated')})
    })
});