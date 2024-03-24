AOS.init();
let aboutslideBtn = document.getElementById('about-slide-btn');
let educationBtn = document.getElementById('education-btn');
let educationBtnIcon = document.getElementById('education-btn-icon');
let experienceBtn = document.getElementById('experience-btn');
let experienceBtnIcon = document.getElementById('experience-btn-icon');
let box = document.querySelector('.about-above-box');
let li_1=document.querySelector('.li-1')
let li_3=document.querySelector('.li-3')
let li_2=document.querySelector('.li-2')
// aboutslideBtn.onclick=()=>{
//     console.log('hello');
//     box.classList.add('slide-animation');
// }

box.onclick=()=>{
    box.classList.add('slide-animation');
    li_1.classList.add('slide-left-animation');
    li_3.classList.add('slide-left-animation');
    li_2.classList.add('slide-right-animation');
}
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

