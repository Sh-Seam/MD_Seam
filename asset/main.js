var hamb = document.querySelector(".hamb");
var nav = document.querySelector(".nav-list");
var link = document.querySelector(".nav-list li");
hamb.addEventListener('click',function(){
    this.classList.toggle('click');
    nav.classList.toggle('open')
})