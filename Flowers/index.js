const title = document.querySelector('.title');
const text = `Ada Sesuatu Buat Kamu ✨`.split('');

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`;
  } else {
    title.innerHTML += `<span style='width: 1.2rem'></span>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 2;
  element.style.setProperty('--delay', `${randomDelay}s`);
  element.style.animationDelay = `${randomDelay}s`;
});
