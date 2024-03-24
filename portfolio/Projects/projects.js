AOS.init();

let project_slideBtn = document.getElementById('projects-slide-btn');
let show = document.getElementById('show');
let respo_menu = document.getElementById('respo-menu');
let projects =document.getElementById('projects');


project_slideBtn.onclick=()=>{
    document.querySelector('.project-above-box').classList.add('slide-animation');
} 

show.onclick=()=>{
    // console.log(respo_menu);
    respo_menu.classList.add('respo-menu-animation');
    projects.style.display='none'
}
remove.onclick=()=>{
    respo_menu.classList.remove('respo-menu-animation')
    projects.style.display='block'

}