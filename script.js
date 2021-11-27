const menuToggle = document.querySelector('.menu-toggle input');
const x = document.querySelector('nav ul');
const y = document.querySelector('.temp');
function ToggleFunction(){
    if (menuToggle.checked === true) {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}
/*menuToggle.addEventListener('click', function(){if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  };
}*/