// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');

    // Animate skills when tab opens
    if(btn.dataset.tab === 'skills') animateSkills();
    // Animate timeline when tab opens
    if(btn.dataset.tab === 'experience') animateTimeline();
  });
});

// Skill bar animation
function animateSkills() {
  const skills = document.querySelectorAll('#skills .skill-fill');
  skills.forEach(skill => {
    skill.style.width = skill.dataset.width;
  });
}

// Timeline animation
function animateTimeline() {
  const items = document.querySelectorAll('#experience .timeline-item');
  items.forEach(item => item.classList.add('visible'));
}

// Animate on load if active
window.addEventListener('load', () => {
  if(document.getElementById('skills').classList.contains('active')) animateSkills();
  if(document.getElementById('experience').classList.contains('active')) animateTimeline();
});
