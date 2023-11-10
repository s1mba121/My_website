const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const home_imgs = document.querySelector(".home_imgs");
const btn_home = document.querySelector(".btn_home");
const btn_about = document.querySelector(".btn_about");
const btn_portfolio = document.querySelector(".btn_portfolio");
const btn_blog = document.querySelector(".btn_blog");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btn_home.addEventListener('click', async ()=> {
    // remove
    blog.classList.remove('clicked');
    portfolio.classList.remove('clicked');
    about.classList.remove('clicked');

    await sleep(100);

    portfolio.style.top = '-5000px';
    blog.style.top = '-1000px';
    
    setTimeout(function() {
        home.classList.add('clicked');
        home_imgs.classList.add('clicked');
      }, 200);
    
    
})

btn_about.addEventListener('click', async ()=> {
    // remove
    blog.classList.remove('clicked');
    portfolio.classList.remove('clicked');
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');

    await sleep(100);

    portfolio.style.top = '-5000px';
    blog.style.top = '-1000px';

    setTimeout(function() {
        about.classList.add('clicked');
    }, 200);
})

btn_portfolio.addEventListener('click', ()=> {
    // remove
    blog.classList.remove('clicked');
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
    about.classList.remove('clicked');

    portfolio.style.top = '-1200px';
    blog.style.top = '-1000px';
    setTimeout(function() {
        portfolio.classList.add('clicked');
    }, 200)
})

btn_blog.addEventListener('click', async () => {
    // remove
    home.classList.remove('clicked');
    home_imgs.classList.remove('clicked');
    about.classList.remove('clicked');
    portfolio.classList.remove('clicked');

    await sleep(100); // Задержка на 2 секунды

    portfolio.style.top = '-5000px';
    blog.style.top = '147px';

    setTimeout(function() {
        blog.classList.add('clicked');
    })
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
