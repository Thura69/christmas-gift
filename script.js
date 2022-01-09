const showMenu = (navToggle,navMenu)=>{
    var Nav_Toggle = document.getElementById(navToggle);
     var Nav_Menu   = document.getElementById(navMenu);

     if(Nav_Toggle && Nav_Menu){
         Nav_Toggle.addEventListener('click',()=>{
             Nav_Menu.classList.toggle('show__menu')
         })
     }
}

showMenu('nav-toggle','nav__menu');

const Nav_Link = document.querySelectorAll('.nav__link');
    const navMenu = document.getElementById('nav__menu');
Nav_Link.forEach(n=> n.addEventListener('click',()=>{
    navMenu.classList.remove('show__menu')
}))
// const sections = document.querySelectorAll('section[id]');

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop -50;
//        const sectionId = current.getAttribute('id')

//         if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }

// window.addEventListener('scroll',scrollActive)

function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY>200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader);

function scrollTop(){
     const scroll_top = document.getElementById('scroll-top');
    if(this.scrollY >= 560){
      scroll_top.classList.add('scroll_active');
    }else{
      scroll_top.classList.remove('scroll_active');

    }
}
window.addEventListener('scroll',scrollTop);

const themeButton = document.getElementById('theme-button');
const darkmode = 'darkmode';
const iconTheme = "bx-toggle-right";


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkmode);
    themeButton.classList.toggle(iconTheme);
})

const sr = ScrollReveal({
    distance:'50px',
    duration:2000,
    reset:true
})

sr.reveal(`.home__data, .home__img,.decoration__data`,{
    origin:'top',
    interval:200
})
sr.reveal(`.share__description`,{
    origin:'right',
    interval:300
})
sr.reveal(`.share__img,.send__content`,{
    distance:'50px',
    origin:'left',
    interval:500
})
sr.reveal('.send__button,.send__img',{
    origin:'right',
    interval:300
    
})
sr.reveal('.accessory__content,.footer',{
    origin:'bottom',
    interval:300
})
sr.reveal('.footer__social',{
    origin:'bottom',
    duration:3000,
    interval:300
})