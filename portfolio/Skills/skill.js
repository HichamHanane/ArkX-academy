AOS.init();

let skills_slideBtn = document.getElementById('skills-slide-btn');
let remove = document.getElementById('remove');
let show = document.getElementById('show');
let respo_menu = document.getElementById('respo-menu');



skills_slideBtn.onclick=()=>{
    document.querySelector('.skills-above-box').classList.add('slide-animation');
} 

show.onclick=()=>{
    // console.log(respo_menu);
    respo_menu.classList.add('respo-menu-animation');
}
remove.onclick=()=>{
    respo_menu.classList.remove('respo-menu-animation')
}