const sesabtn = document.querySelector("#sesaBtn");
const robogalsbtn = document.querySelector("#robogalsBtn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

//typing text
const div = document.querySelector("#hello");
const helloText = "Hello, I am Caitlin!";

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(div, helloText);

//buttons for changing involvement text
sesabtn.addEventListener("click", () => {
  title.textContent = "SESA | MARKETING COORDINATOR";
  description.textContent = "Software Engineering Students' Association (SESA) aims to enhance the experience of software engineering students at UoA. As the Marketing Coordinator, I design graphics and promotional materials for events for students to connect, learn, and have fun.During my time in this role, I have established a iconic branding and mascot design for SESA.";
});

robogalsbtn.addEventListener("click", () => {
    title.textContent = "ROBOGALS AKL | MARKETING MANAGER";
    description.textContent = "Robogals AKL is an organization that aims to inspire and empower young women to pursue careers in STEM. As the Marketing Manager, I am responsible for creating promotional materials and managing our social media presence to engage with our community and attract new members. Furthermore I actively volunteer at our various workshops.";
});