//var currentClass = document.getElementById("helper").getAttribute("data-name");

let newMenuClass = document.querySelector('.new-menu');
let selectedClassValue = document
  .getElementById('selectedClass')
  .getAttribute('selectedClass');

let currentIndex = selectedClassValue === 'home' ? 'current' : '';
let currentAboutMe = selectedClassValue === 'aboutMe' ? 'current' : '';
let currentMyWork = selectedClassValue === 'myWork' ? 'current' : '';
let currentContactMe = selectedClassValue === 'contactMe' ? 'current' : '';

let newMenu = `
          <div>
            <ul>
              <li class="${currentIndex}">
                <a href="./" class="nav-link">Home</a>
              </li>
              <li class="${currentAboutMe}">
                <a href="about.html" class="nav-link">About Me</a>
              </li>
              <li class="${currentMyWork}">
                <a href="work.html" class="nav-link">My Work</a>
              </li>
              <li class="${currentContactMe}">
                <a href="contact.html" class="nav-link">Contact Me</a>
              </li>
            </ul>
          </div>     
`;

newMenuClass.innerHTML = newMenu;

