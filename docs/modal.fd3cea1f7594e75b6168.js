(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(e,n,o){"use strict";function i(e,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}o.r(n);var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.openModalButton=document.querySelectorAll(".open-modal"),this.events()}var n,o,a;return n=e,(o=[{key:"events",value:function(){var e=this;this.openModalButton.forEach((function(n){return n.addEventListener("click",(function(n){return e.openTheModal(n)}))})),this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n  <div class="modal__inner">\n    <h2 class="section-title section-title--less-margin section-title--blue">Get in <strong>Touch</strong></h2>\n    <div class="wrapper wrapper--narrow">\n      <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n    </div>\n        <div class="social-icons">\n          <a href="" class="social-icons__icon"><i class="fa fa-envelope" aria-hidden="true"></i></i></a>\n          <a href="" class="social-icons__icon"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>\n          <a href="" class="social-icons__icon"><i class="fa fa-phone-square" aria-hidden="true"></i></a>\n        </div>\n    </div>\n    <div class="modal__close">X</div>\n  </div>\n</div>\n    ')}}])&&i(n.prototype,o),a&&i(n,a),e}();n.default=a}}]);