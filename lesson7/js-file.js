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

const content2 = document.createElement('div');
content2.classList.add('div')
content2.style.cssText = "background-color: pink; border:2px solid black;";

const Heading1 = document.createElement('h1');
Heading1.classList.add('h1');
Heading1.textContent = "I'm in a div"

const ptext = document.createElement('p');
ptext.classList.add('p');
ptext.textContent = "ME TOO!";

content2.appendChild(Heading1)
content2.appendChild(ptext)

container.appendChild(content2)