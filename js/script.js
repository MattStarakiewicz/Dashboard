'use strict';

/* Hamburger */

var hamburger = document.querySelector('.hamburger');

console.log(hamburger)

function toggleMenu(visible) {
    document.querySelector('.side-menu').classList.toggle('show', visible)
}

hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("test");
    toggleMenu() 
});

/* Modal */

function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}


document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        closeModal()
    })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal()
    }
  })

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
  })

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  }

openModal('#myModal')