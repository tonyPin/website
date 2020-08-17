class MobileMenu {
  constructor(){
    this.menuIcon = document.querySelector(".logo__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.events()
  }

  events(){
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu(){
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.menuIcon.classList.toggle("logo__menu-icon--close-x")
    
  }
}

export default MobileMenu;