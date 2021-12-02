const openMobileMenu = (identifier) =>  {
    let mobileMenuOpen = $("#desktopMenu");
    let menuToggler = $("#openMenuToggler");
    let mobileMenuJS = document.getElementById(`desktopMenu`);

    mobileMenuOpen.toggleClass("open-mobile-menu");
    menuToggler.toggleClass("clicked");

    identifier = mobileMenuJS.classList[2];

    switch (identifier) {
        case `null`:
        case `undefined`:
        default:
            mobileMenuOpen.toggleClass(`closed`);
            break;
        case `open-mobile-menu`:
            break;
    }
}