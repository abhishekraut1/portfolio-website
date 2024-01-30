toggleMenu = ()=> {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll",()=>{
  const navbar = document.getElementById("desktop-nav")
  
  this.scrollY > 0 ? navbar.classList.add("border-bottom") : navbar.classList.remove("border-bottom")
});

const logo = document.querySelector(".logo");
logo.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
})

