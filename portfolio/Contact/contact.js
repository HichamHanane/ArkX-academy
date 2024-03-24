AOS.init();
let remove = document.getElementById('remove');
let show = document.getElementById('show');
let respo_menu = document.getElementById('respo-menu');


show.onclick=()=>{
    // console.log(respo_menu);
    respo_menu.classList.add('respo-menu-animation');
}
remove.onclick=()=>{
    respo_menu.classList.remove('respo-menu-animation')
}