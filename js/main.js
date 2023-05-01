const newMenuClass = document.querySelector('.new-menu');
const selectedClassValue = document
  .getElementById('selectedClass')
  .getAttribute('selectedClass');

const currentIndex = selectedClassValue === 'home' ? 'current' : '';
const currentAboutMe = selectedClassValue === 'aboutMe' ? 'current' : '';
const currentMyWork = selectedClassValue === 'myWork' ? 'current' : '';
const currentContactMe = selectedClassValue === 'contactMe' ? 'current' : '';

const newMenu = `
          <div>
            <ul>
              <li class="${currentIndex}">
                <a href="./" class="nav-link" data-value="Home" onmouseover="hackerText(this)">Home</a>
              </li>
              <li class="${currentAboutMe}">
                <a href="about.html" class="nav-link" data-value="About Me" onmouseover="hackerText(this)">About Me</a>
              </li>
              <li class="${currentMyWork}">
                <a href="work.html" class="nav-link" data-value="My Work" onmouseover="hackerText(this)">My Work</a>
              </li>
              <li class="${currentContactMe}">
                <a href="contact.html" class="nav-link" data-value="Contact Me" onmouseover="hackerText(this)">Contact Me</a>
              </li>
            </ul>
          </div>     
`;

newMenuClass.innerHTML = newMenu;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function hackerText(element) {
  const wordLength = element.innerText.length;
  let iterations = 0;

  const interval = setInterval(() => {
    element.innerText = element.innerText
      .split('')
      .map((letter, index) => {
        if (index < iterations) {
          return element.dataset.value[index];
        }
        const random = Math.floor(Math.random() * 26);
        return letters[random];
      })
      .join('');

    if (iterations >= wordLength) {
      clearInterval(interval);
    }

    iterations += 1 / 2;
  }, 30);
}
