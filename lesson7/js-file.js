const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const Redtext = document.createElement('p');
Redtext.classList.add('p');
Redtext.textContent = "Hey I'm red!";
Redtext.style.color = 'red';

container.appendChild(Redtext);

const Heading3 = document.createElement('h3');
Heading3.classList.add('h3');
Heading3.textContent = "I'm a blue h3!";
Heading3.style.color = 'blue';

container.appendChild(Heading3);

const container2 = document.createElement('div');
container2.classList.add('div')
container2.style.cssText = 'background: pink; border: black;';
