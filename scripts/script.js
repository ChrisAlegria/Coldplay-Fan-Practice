////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! width 899px Script.
let screenWidth = window.innerWidth;

// ~Width Principal Functions
if(screenWidth > 800){
    document.getElementById('navegation-hidden-option').style = 'display:none';
    document.getElementById('')

} else {
    document.getElementById('navegation-hidden-option').style = 'display:block';

}

// ~Navegation Menu Dropdown
function navegationMenuDropdown(){
    let navegationDropdownActivation = document.getElementById('navegation-menu-element').textContent;

    if(navegationDropdownActivation == 'MENU'){
        document.getElementsByTagName('nav')[0].style = 'display: block; transition: display 2s;';
        document.getElementsByTagName('main')[0].style = 'display: none';
        document.getElementsByTagName('footer')[0].style = 'display: none';
        document.getElementById('navegation-menu-element').textContent = 'CLOSE';
        document.getElementsByClassName('media-branding-nav')[0].style = 'margin-left: 1.5vw';
        document.getElementsByClassName('media-branding-nav')[1].style = 'margin-right: 1.5vw';   
        document.getElementById('moons-logo').style = 'margin-left: 0.1vw';
        return

    } else if(navegationDropdownActivation == 'CLOSE'){
        document.getElementById('navegation-menu-element').textContent = 'MENU';
        document.getElementsByTagName('nav')[0].style = 'display: none';
        document.getElementsByTagName('main')[0].style = 'display: block';
        document.getElementsByTagName('footer')[0].style = 'display: block';
        return
    }
}    