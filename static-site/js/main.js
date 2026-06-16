// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Contact form -> WhatsApp
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');

function setError(name, msg) {
  const el = form.querySelector(`[data-err="${name}"]`);
  if (el) el.textContent = msg || '';
}

function validate(data) {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) errors.name = 'Informe seu nome';
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'E-mail inválido';
  if (!data.company || data.company.trim().length < 2) errors.company = 'Informe a empresa';
  if (!data.message || data.message.trim().length < 10) errors.message = 'Conte um pouco mais';
  return errors;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const data = Object.fromEntries(fd);
  ['name','email','company','message'].forEach((k) => setError(k, ''));
  const errors = validate(data);
  if (Object.keys(errors).length) {
    Object.entries(errors).forEach(([k, v]) => setError(k, v));
    return;
  }
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  const text = encodeURIComponent(
    `Olá! Me chamo ${data.name.trim()} e represento a empresa ${data.company.trim()}.\n\n${data.message.trim()}\n\nE-mail: ${data.email.trim()}`
  );
  window.open(`https://wa.me/5551982432615?text=${text}`, '_blank', 'noopener,noreferrer');
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '✓ Enviado';
    form.reset();
  }, 600);
});
