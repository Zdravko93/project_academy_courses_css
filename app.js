// Responsive navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
         
       });
       // Animation - burger
       burger.classList.toggle('toggle');
    });


}

navSlide();



//COMMENT slider
const questions = document.querySelectorAll('.question'); // array of questions
console.log(questions);
const answers = document.querySelectorAll('.answer');

questions.forEach(question => {
   question.addEventListener('click', () => {
      answers
   });
});






