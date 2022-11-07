'use strict';

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);

            const topOffset = 0; // if you don't need an indent from the top
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: elementPosition,
                behavior: 'smooth'
            });
        });
    });

});