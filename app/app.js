const menu = document.querySelector(".navbar-toggler i");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-times");
});


//get the button by the id btnUp
let btnUp = document.getElementById("btnUp")
//showing the btnUp after passing a threshold
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}


const skills=['fa-css3', 'fa-js', 'fa-html5', 'fa-react', 'fa-sass', 'fa-git', 'fa-github', 'fa-bootstrap', 'fa-figma', 'fa-npm']
const colors=['blue', 'yellow', 'orange', 'blue', 'pink', 'orange', 'white', 'purple', 'green', 'red']
const names=['CSS', 'JavaScript', 'HTML', 'React', 'Sass', 'Git', 'GitHub', 'Bootstrap', 'Figma', 'NPM']
let i=0;
const skillOne=document.querySelector('.skill-one');
const skillTwo=document.querySelector('.skill-two');
const skillThree=document.querySelector('.skill-three');
const skillOneIcon = document.querySelector('.skill-one i');
const skillTwoIcon = document.querySelector('.skill-two i');
const skillThreeIcon = document.querySelector('.skill-three i');
const textOne = document.querySelector('.text-one');
const textTwo = document.querySelector('.text-two');
const textThree = document.querySelector('.text-three');
const right = document.querySelector('.right-arrow i');
const left = document.querySelector('.left-arrow i');
skillOneIcon.classList.add(colors[0]);
skillTwoIcon.classList.add(colors[1]);
skillThreeIcon.classList.add(colors[2]);

right.addEventListener('click', () => {
    skillOneIcon.classList.remove(skills[i]);
    skillOneIcon.classList.remove(colors[i]);
    skillTwoIcon.classList.remove(skills[i+1]);
    skillTwoIcon.classList.remove(colors[i+1]);
    skillThreeIcon.classList.remove(skills[i+2]);
    skillThreeIcon.classList.remove(colors[i+2]);
    i++;
    if(i===skills.length-2){
        i=0;
    }
    skillOneIcon.classList.add(skills[i]);
    skillOneIcon.classList.add(colors[i]);
    textOne.innerHTML=names[i];
    skillTwoIcon.classList.add(skills[i+1]);
    skillTwoIcon.classList.add(colors[i+1]);
    textTwo.innerHTML=names[i+1];
    skillThreeIcon.classList.add(skills[i+2]);
    skillThreeIcon.classList.add(colors[i+2]);
    textThree.innerHTML=names[i+2];
});

left.addEventListener('click', () => {
    skillOneIcon.classList.remove(skills[i]);
    skillOneIcon.classList.remove(colors[i]);
    skillTwoIcon.classList.remove(skills[i+1]);
    skillTwoIcon.classList.remove(colors[i+1]);
    skillThreeIcon.classList.remove(skills[i+2]);
    skillThreeIcon.classList.remove(colors[i+2]);
    i--;

    if(i<0){
        i=skills.length-3;
    }
    skillOneIcon.classList.add(skills[i]);
    skillOneIcon.classList.add(colors[i]);
    textOne.innerHTML=names[i];
    skillTwoIcon.classList.add(skills[i+1]);
    skillTwoIcon.classList.add(colors[i+1]);
    textTwo.innerHTML=names[i+1];
    skillThreeIcon.classList.add(skills[i+2]);
    skillThreeIcon.classList.add(colors[i+2]);
    textThree.innerHTML=names[i+2];
});

const projectOne= document.querySelector('.project-one');
const projectTwo= document.querySelector('.project-two');
const projectThree= document.querySelector('.project-three');

const leftA= document.querySelector('.left-a i');
const rightA= document.querySelector('.right-a i');

const cardImg= document.querySelector('.card-img-top');
const cardTitle= document.querySelector('.card-title');
const cardText= document.querySelector('.card-text');
const cardSkills= document.querySelector('.card-skills');
const notDisplayed= document.querySelectorAll('.not-displayed');

projectOne.addEventListener('click', () => {
    if(projectOne.classList.contains('active')){
    }else{
        projectOne.classList.add('active');
        projectTwo.classList.remove('active');
        projectThree.classList.remove('active');
    }
    cardImg.src='images/4136918.jpg';
    cardTitle.innerHTML='Portfolio website';
    cardText.innerHTML='A responsive portfolio website that shows my abilities and skills.';
    cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, Bootstrap, SCSS, Git and Github</small>';
});
projectTwo.addEventListener('click', () => {
    if(projectTwo.classList.contains('active')){
        void(0);
    }else{
        projectTwo.classList.add('active');
        projectOne.classList.remove('active');
        projectThree.classList.remove('active');
    }
    cardImg.src='images/sneakers-purple.jpg';
    cardTitle.innerHTML='NFT website';
    cardText.innerHTML='A responsive NFT website from Scrimba course.';
    cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
});
projectThree.addEventListener('click', () => {
    if(projectThree.classList.contains('active')){
        void(0);
    }else{
        projectThree.classList.add('active');
        projectOne.classList.remove('active');
        projectTwo.classList.remove('active');
    }
    cardImg.src='images/weatherwepapp.jpg';
    cardTitle.innerHTML='Weather web app ';
    cardText.innerHTML='A responsive Weather wep app using OpenWeather API.';
    cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
});

rightA.addEventListener('click', () => {
    if(projectOne.classList.contains('active')){
        projectOne.classList.remove('active');
        projectTwo.classList.add('active');
        projectThree.classList.remove('active');
        projectOne.classList.toggle('not-displayed');
        projectTwo.classList.toggle('not-displayed');
        cardImg.src='images/sneakers-purple.jpg';
        cardTitle.innerHTML='NFT website';
        cardText.innerHTML='A responsive NFT website from Scrimba course.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
    }else if(projectTwo.classList.contains('active')){
        projectOne.classList.remove('active');
        projectTwo.classList.remove('active');
        projectThree.classList.add('active');
        projectTwo.classList.toggle('not-displayed');
        projectThree.classList.toggle('not-displayed');
        cardImg.src='images/weatherwepapp.jpg';
        cardTitle.innerHTML='Weather web app ';
        cardText.innerHTML='A responsive Weather wep app using OpenWeather API.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
    }else{
        projectOne.classList.add('active');
        projectTwo.classList.remove('active');
        projectThree.classList.remove('active');
        projectOne.classList.toggle('not-displayed');
        projectThree.classList.toggle('not-displayed');
        cardImg.src='images/4136918.jpg';
        cardTitle.innerHTML='Portfolio website';
        cardText.innerHTML='A responsive portfolio website that shows my abilities and skills.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, Bootstrap, SCSS, Git and Github</small>';
    }
});

leftA.addEventListener('click', () => {
    if(projectOne.classList.contains('active')){
        projectOne.classList.remove('active');
        projectTwo.classList.remove('active');
        projectThree.classList.add('active');
        projectOne.classList.toggle('not-displayed');
        projectThree.classList.toggle('not-displayed');
        cardImg.src='images/weatherwepapp.jpg';
        cardTitle.innerHTML='Weather web app ';
        cardText.innerHTML='A responsive Weather wep app using OpenWeather API.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
    }else if(projectThree.classList.contains('active')){
        projectOne.classList.remove('active');
        projectTwo.classList.add('active');
        projectThree.classList.remove('active');
        projectTwo.classList.toggle('not-displayed');
        projectThree.classList.toggle('not-displayed');
        cardImg.src='images/sneakers-purple.jpg';
        cardTitle.innerHTML='NFT website';
        cardText.innerHTML='A responsive NFT website from Scrimba course.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, SCSS, Git and Github</small>';
    }else{
        projectOne.classList.add('active');
        projectTwo.classList.remove('active');
        projectThree.classList.remove('active');
        projectOne.classList.toggle('not-displayed');
        projectTwo.classList.toggle('not-displayed');
        cardImg.src='images/4136918.jpg';
        cardTitle.innerHTML='Portfolio website';
        cardText.innerHTML='A responsive portfolio website that shows my abilities and skills.';
        cardSkills.innerHTML='<small class="text-muted">Html5, CSS3, JavaScript, Bootstrap, SCSS, Git and Github</small>';
    }   
});