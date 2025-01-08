AOS.init({duration: 600});

//PDF BUTTON SHOW FUNCTION - defunct//
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



// SCROLL DETECTOR SECTION //
    // FUNCTIONS //
const selectLink = function(event) {
  highlightLink(event.currentTarget);
}
const highlightLink = function(element) {
  for (let link of links) {
      link.classList.remove('selected');
  }
  element.classList.add('selected');
}
const scrollToSection = function(event) {
  event.preventDefault();
  document.querySelector(event.currentTarget.hash).scrollIntoView({behavior: 'smooth'});
}
const checkSections = function(entries) {
  for (let entry of entries) {
      if (entry.intersectionRatio >= 0.5) {
          let hash = '#' + entry.target.id;
          for (let link of links) {
              if (link.hash === hash) highlightLink(link);
          }
      }
  }
}
    // VARIABLES //
let links = document.querySelectorAll('nav a');
let observer = new IntersectionObserver(checkSections, {threshold:[0.5]});
let sections = document.querySelectorAll('section');
    // SCRIPT //
for (let section of sections) {
  observer.observe(section);
}



// COPY EMAIL TO CLIPBOARD//
function copyText() {
  navigator.clipboard.writeText
      ("nicoleleaaw@gmail.com");

  alert("email copied! :)");
}



// INTRO ANIMATION //
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    },2000);

    setTimeout(()=>{
      intro.style.top= '-100vh';
    }, 2300)
    
  })

})