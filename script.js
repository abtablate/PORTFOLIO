function showAbout() {
    document.getElementById("about").classList.toggle("hidden");
}
function showEducation() {
    document.getElementById("education").classList.toggle("hidden");
}
function showSkills() {
    document.getElementById("skills").classList.toggle("hidden");
}
function showContact() {
    document.getElementById("contact").classList.toggle("hidden");
}

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach(section => {
  observer.observe(section);
});
