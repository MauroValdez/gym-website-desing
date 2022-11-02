import emailjs from '@emailjs/browser'

const calculateForm = document.querySelector("#calculate-form");
const contactForm = document.querySelector('#contact-form');


calculateForm.addEventListener("submit", calculateBmi);
contactForm.addEventListener('submit', sendEmail);


window.addEventListener("scroll", () => {
  scrollHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
});

function showMenu() {
  const navClose = document.querySelector("#nav-close");
  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}
function scrollHeader() {
  const header = document.querySelector("#header");
  window.scrollY >= 100
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
}

function calculateBmi(e) {
  e.preventDefault();

  const calculateCm = document.querySelector("#calculate-cm");
  const calculateKg = document.querySelector("#calculate-kg");
  const calculateMessage = document.querySelector("#calculate-message");

  if (calculateCm.value === "" || calculateKg.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");
    calculateMessage.textContent = "Fill in the Height and Weight";
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm +cm));

    if(bmi < 18.5) {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
    } else if(bmi < 25) {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }

    calculateCm.value = '';
    calculateKg.value = '';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 4000)
  }
}

function sendEmail(e) {
  const contactMessage = document.querySelector('#contact-message');
  const contactUser = document.querySelector('#contact-user');

  e.preventDefault();
  if(contactUser.value === '') {
    contactMessage.classList.remove('color-green');
    contactMessage.classList.add('color-red');

    contactMessage.textContent = 'You must enter your email';

    setTimeout(() => {
      contactMessage.textContent= '';
    }, 3000)
  } else {
    emailjs.sendForm('service_v7skgve','template_75qjfdo','#contact-form','sAIJesc-yNkY0G7GP')
      .then(() => {
        contactMessage.classList.add('color-green')
        contactMessage.textContent = 'You registered successfully'

        setTimeout(() => {
          contactMessage.textContent = ''
        }, 3000)
      }, (error) => {
        alert('OPPS! SOMETHING HAS FAILED', error)
      })
    
      contactUser.value = '';
  }
}