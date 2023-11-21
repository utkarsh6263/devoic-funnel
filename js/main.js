const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq)=> {
    faq.addEventListener( "click" , () => {
        faq.classList.toggle("active");
    });
});


// button
let btn = document.querySelector('a');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    btn.style.setProperty('--x', x + 'deg'); 
});


