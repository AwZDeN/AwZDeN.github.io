const burgerBtn = document.querySelector('.burger__icon')
const burger = document.querySelector('.burger')
const body = document.querySelector('body')

if (burgerBtn){
    burgerBtn.addEventListener('click', function() {
    
    if (burger) {

        burger.classList.toggle('show');

        }

        if(burger.classList.contains('show')) {
            
            body.style.overflow = 'hidden';

        }
        else {

            body.style.overflow = "";

    }
    })
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }
    })
}) 

const animationOnScroll = document.querySelectorAll('.animation-on-scroll')
animationOnScroll.forEach(element => {

    observer.observe(element)

})