const home = document.querySelector(".home");
const home_imgs = document.querySelector(".home_imgs");
const btn_home = document.querySelector(".btn_home");
const btn_about = document.querySelector(".btn_about");
const btn_portfolio = document.querySelector(".btn_portfolio");
const btn_blog = document.querySelector(".btn_blog");


btn_home.addEventListener('click', ()=> {
    home.classList.add('clicked');
    home_imgs.classList.add('clicked');
})

btn_about.addEventListener('click', ()=> {
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
})