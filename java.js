const header = document.querySelector( "header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})
/*Para sa responsive*/
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
/*Para sa date*/

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }

    });
});

const hiddenElements = document.querySelectorAll('.row') ; 
hiddenElements.forEach((el) => observer.observe(el));

/*Para sa reservation*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Reservation submitted successfully!");
        form.reset();
    });
});
ject. Additional
/*Para sa slideshow ng details*/
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})






