document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animation (Fade in on scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const gnav = document.getElementById('gnav');

    if (menuToggle && gnav) {
        menuToggle.addEventListener('click', () => {
            gnav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // 3. Smooth Scroll & Jump Highlight
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (gnav) gnav.classList.remove('active');

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Reset highlights
                document.querySelectorAll('.section-title').forEach(title => {
                    title.classList.remove('jump-highlight');
                });

                // Perform scroll
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight + 10,
                    behavior: 'smooth'
                });

                // Trigger visual feedback (Orange border)
                const targetTitle = targetSection.querySelector('.section-title');
                if (targetTitle) {
                    targetTitle.classList.add('jump-highlight');
                    setTimeout(() => {
                        targetTitle.classList.remove('jump-highlight');
                    }, 1500);
                }
            }
        });
    });

    // 4. Profile Image Toggle
    // 4. Profile Image Toggle
    const profileImages = document.querySelectorAll('.liquid-profile');
    const photoWrapper = document.querySelector('.mv-photo-final');

    if (photoWrapper && profileImages.length > 0) {
        photoWrapper.addEventListener('click', () => {
            profileImages.forEach(img => img.classList.toggle('active'));
        });

        // Disable right-click context menu
        photoWrapper.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    }
});