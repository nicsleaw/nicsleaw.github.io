AOS.init({duration: 1000});
for (let link of links) {
    link.addEventListener('click', selectLink);
    link.addEventListener('click', scrollToSection);
}
