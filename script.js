AOS.init({duration: 1000});
for (let link of links) {
    link.addEventListener('click', selectLink);
    link.addEventListener('click', scrollToSection);
}

function show() {
    var x = document.getElementById("buttonpdf");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function show2() {
    var x = document.getElementById("buttonpdf2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }