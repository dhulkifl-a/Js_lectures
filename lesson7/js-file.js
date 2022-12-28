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