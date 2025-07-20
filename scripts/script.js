////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! width 899px Script.
let screenWidth = window.innerWidth;

if(screenWidth > 800){
    document.getElementById('navegation-hidden-option').style = 'display:none'

} else {
    document.getElementById('navegation-hidden-option').style = 'display:block'

}

// ~Navegation Menu Dropdown
function navegationMenuDropdown(){
    let navegationDropdownActivation = document.getElementById('navegation-menu-element').textContent;

    if(navegationDropdownActivation == 'MENU'){
        document.getElementsByTagName('nav')[0].style = 'display: block';
        document.getElementsByTagName('main')[0].style = 'display: none';
        document.getElementsByTagName('footer')[0].style = 'display: none';
        document.getElementById('navegation-menu-element').textContent = 'CLOSE'
        return

    } else if(navegationDropdownActivation == 'CLOSE'){
        document.getElementsByTagName('nav')[0].style = 'display: none';
        document.getElementById('navegation-menu-element').textContent = 'MENU'
        document.getElementsByTagName('main')[0].style = 'display: block';
        document.getElementsByTagName('footer')[0].style = 'display: block';
        return

    }
}    