const home = document.querySelector(".home");
const about = document.querySelector(".about");
const home_imgs = document.querySelector(".home_imgs");
const btn_home = document.querySelector(".btn_home");
const btn_about = document.querySelector(".btn_about");
const btn_portfolio = document.querySelector(".btn_portfolio");
const btn_blog = document.querySelector(".btn_blog");


btn_home.addEventListener('click', ()=> {
    // remove
    about.classList.remove('clicked');
    setTimeout(function() {
        home.classList.add('clicked');
        home_imgs.classList.add('clicked');
      }, 200);
    
    
})

btn_about.addEventListener('click', ()=> {
    // remove
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
    setTimeout(function() {
        about.classList.add('clicked');
    }, 200);
})

btn_portfolio.addEventListener('click', ()=> {
    // remove
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
    about.classList.remove('clicked');
})

btn_blog.addEventListener('click', ()=> {
    // remove
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
    about.classList.remove('clicked');
})