const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
    observer.observe(el);
});