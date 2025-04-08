document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    const rightSidebar = document.getElementById('right-sidebar');

    document.getElementById('show-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.add('show');
    });

    document.getElementById('close-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.remove('show');
    });

    rightSidebar.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            rightSidebar.classList.remove('show');
        });
    });
})