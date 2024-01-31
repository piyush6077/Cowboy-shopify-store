const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("navList");

openMenu.addEventListener("click",()=>{
    menu.classList.remove('hidden');
    menu.style.animation = "fromTop 1s ease";
});

const Close_Menu = () => {
       menu.classList.add("hidden");
}

closeMenu.addEventListener("click", Close_Menu);



   