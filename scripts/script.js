////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !General width Script.
// ~Width Dinamic Resize Functions
// &Funcion para el ajuste automatico de elementos de manera responsiva segun el tamaño de pantalla.
function resizeAutoLecture(){
    let screenWidth = window.innerWidth;

    if(screenWidth > 800){
        document.getElementById('navegation-hidden-option').style = 'display:none';
        document.getElementsByTagName('main')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByTagName('footer')[0].style = 'visibility: visible; opacity: 1; display: block';
    } else {
        document.getElementById('navegation-hidden-option').style = 'display:block';
        document.getElementsByTagName('nav')[0].style = 'display: none;';
        setTimeout(() => {
            document.getElementsByTagName('nav')[0].style = 'display: block;';
        }, 1);
    }
}

// &Ejecicion de la funcion resizeAutoLecture.
resizeAutoLecture();

// &Evento listener para cuando se ajuste el tamaño de pestaña se autoajusten los elementos reutilizando resizeAutoLecture.
window.addEventListener('resize', function (){
    resizeAutoLecture();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !Width 899px Script.
// ~Navegation Menu Dropdown
function navegationMenuDropdown(){
    let navegationDropdownActivation = document.getElementById('navegation-menu-element').textContent;

    if(navegationDropdownActivation == 'MENU'){
        document.getElementsByTagName('nav')[0].style = 'visibility: visible; opacity: 1;';
        document.getElementsByTagName('main')[0].style = 'visibility: hidden; opacity: 0; display: none';
        document.getElementsByTagName('footer')[0].style = 'visibility: hidden; opacity: 0; display: none';
        document.getElementsByClassName('media-branding-nav')[0].style = 'margin-left: 1.5vw';
        document.getElementsByClassName('media-branding-nav')[1].style = 'margin-right: 1.5vw';   
        document.getElementById('navegation-menu-element').textContent = 'CLOSE';
        return;

    } else if(navegationDropdownActivation == 'CLOSE'){
        document.getElementById('navegation-menu-element').textContent = 'MENU';
        document.getElementsByTagName('nav')[0].style = 'visibility: hidden; opacity: 0;';
        document.getElementsByTagName('main')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByTagName('footer')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByClassName('media-branding-nav')[0].style = 'margin-left: 1.65vw';
        document.getElementsByClassName('media-branding-nav')[1].style = 'margin-right: 1.65vw';   
        return;
    }
}    