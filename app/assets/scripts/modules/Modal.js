class Modal {
  constructor(){
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.openModalButton = document.querySelectorAll(".open-modal")
    this.events()
  }

  events(){
    // listen for open click
    this.openModalButton.forEach (el => el.addEventListener("click", e => this.openTheModal(e)))
    //listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())
    //push any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if(e.keyCode == 27){
      this.closeTheModal()
    }
  }

  openTheModal(){
    
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal(){
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML(){
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
  <div class="modal__inner">
    <h2 class="section-title section-title--less-margin section-title--blue">Get in <strong>Touch</strong></h2>
    <div class="wrapper wrapper--narrow">
      <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
    </div>
        <div class="social-icons">
          <a href="" class="social-icons__icon"><i class="fa fa-envelope" aria-hidden="true"></i></i></a>
          <a href="" class="social-icons__icon"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href="" class="social-icons__icon"><i class="fa fa-phone-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class="modal__close">X</div>
  </div>
</div>
    `)
  }

}

export default Modal