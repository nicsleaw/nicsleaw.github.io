'use strict';


// FUNCTIONS
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
function thanks() {
    var x = document.getElementById("confirm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// VARIABLES
let links = document.querySelectorAll('nav a');
let observer = new IntersectionObserver(checkSections, {threshold:[0.5]});
let sections = document.querySelectorAll('section');


// MODAL 
var modal = document.getElementById("fact");
var btn = document.getElementById("factBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// SCRIPT
AOS.init({duration: 1000});
for (let link of links) {
    link.addEventListener('click', selectLink);
    link.addEventListener('click', scrollToSection);
}
window.addEventListener('beforeunload', function(){
    document.body.scrollIntoView();   
})
for (let section of sections) {
    observer.observe(section);
}
imagesLoaded('body', {background: 'section'}, function() {
    document.querySelector('#loading').classList.add('loaded');
    setTimeout(function() {
        AOS.init( {duration:1000} );
    }, 1000);   
})