// app.js

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* Simple reveal-on-scroll */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('show');
  });
},{threshold:0.12});
revealEls.forEach(el=>revealObserver.observe(el));

/* Project preview modal - basic */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const previews = {
  decorkart: {
    title: 'The Decorkart',
    html: `<p class="text-slate-700">E-commerce platform for home decor — features product listing, filters, wishlist, and checkout flow. Built with React + Node.js. </p>`
  },
  notebuddy: {
    title: 'NoteBuddy App',
    html: `<p class="text-slate-700">Cross-platform note app with voice notes, AI summarization & tagging. Built with Flutter + Firebase.</p>`
  },
  portfolio: {
    title: 'Portfolio Website',
    html: `<p class="text-slate-700">This portfolio — modern pastel theme, smooth animations, responsive layout.</p>`
  },
  ancient: {
    title: 'Ancient Tamil Decoding',
    html: `<p class="text-slate-700">Cultural preservation project translating ancient Tamil inscriptions into modern Tamil using pattern-matching and helpers for scholars.</p>`
  },
  facial: {
    title: 'Facial Emotion Recognition',
    html: `<p class="text-slate-700">Computer vision system to identify facial expressions and map to emotions using pretrained models.</p>`
  }
};

document.querySelectorAll('.open-preview').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.getAttribute('data-proj');
    const data = previews[key];
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.html + `<div class="mt-4"><button class="px-3 py-2 bg-violet-600 text-white rounded">Open repo</button></div>`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

modalClose.addEventListener('click', ()=>{
  modal.classList.remove('flex');
  modal.classList.add('hidden');
});

/* contact form simulation */
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('cname').value.trim();
  formMsg.textContent = `Thanks ${name || ''}, I'll contact you soon!`;
  form.reset();
  setTimeout(()=> formMsg.textContent = '', 5000);
});

/* add small hover tilt (pure CSS mostly) - but we can add subtle mouse parallax if needed */
/* optional: add keyboard accessibility to modal close */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    modal.classList.remove('flex'); modal.classList.add('hidden');
  }
});
