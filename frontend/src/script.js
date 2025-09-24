document.addEventListener('DOMContentLoaded', () => {
    // Scroll-in animation handler
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    
    // Set the initial state of all sections
    fadeInSections.forEach(section => {
        section.classList.add('fade-in-start');
    });

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is entering the viewport, fade it in
                entry.target.classList.remove('fade-in-start');
                entry.target.classList.add('fade-in-end');
            } else {
                // Element is leaving the viewport, fade it out
                entry.target.classList.remove('fade-in-end');
                entry.target.classList.add('fade-in-start');
            }
        });
    }, observerOptions);
    fadeInSections.forEach(section => { observer.observe(section); });

    // Scroll down indicator click handler
    const scrollIndicator = document.querySelector('.scroll-down-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const secondSection = document.querySelector('.fullscreen-section:nth-of-type(2)');
            if (secondSection) {
                secondSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Fade out scroll indicator on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    });

    // Custom Starfield Animation with SVG Icons
    const canvas = document.getElementById('starfield-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // NOTE: The 'iconPaths' variable is loaded from 'icon-list.js'
    let loadedIcons = [];
    let particles = [];
    const numParticles = 75;

    function preloadIcons(callback) {
        let loadedCount = 0;
        iconPaths.forEach(path => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                loadedCount++;
                loadedIcons.push(img);
                if (loadedCount === iconPaths.length) {
                    callback();
                }
            };
        });
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 40 + 20;
            this.baseSpeed = Math.random() * 20 + 5; // Pixels per second
            this.speed = this.baseSpeed;
            this.angle = Math.random() * 360;
            this.spin = (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10; // Degrees per second
            this.image = loadedIcons[Math.floor(Math.random() * loadedIcons.length)];
        }

        update(dt) {
            this.y += this.speed * dt;
            this.angle += this.spin * dt;
            if (this.speed > this.baseSpeed) {
                this.speed *= 0.99; // Slow down faster
            }
            if (this.y > canvas.height + this.size) {
                this.y = -this.size;
                this.x = Math.random() * canvas.width;
                this.speed = this.baseSpeed;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle * Math.PI / 180);
            ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    function init() {
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    let lastTime = 0;
    let shootingStarTimer = 0;
    const shootingStarInterval = 1.5; // Seconds

    function animate(currentTime) {
        const now = currentTime / 1000; // Convert to seconds
        let dt = now - lastTime;
        lastTime = now;

        // Cap delta time to prevent huge jumps on tab resume
        if (dt > 1 / 30) dt = 1 / 30;

        // Shooting star logic
        shootingStarTimer += dt;
        if (shootingStarTimer > shootingStarInterval) {
            shootingStarTimer = 0;
            const availableParticles = particles.filter(p => p.speed <= p.baseSpeed);
            if (availableParticles.length > 0) {
                const p = availableParticles[Math.floor(Math.random() * availableParticles.length)];
                p.speed = Math.random() * 200 + 300; // Much faster boost in pixels/sec
            }
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update(dt);
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    preloadIcons(() => {
        init();
        requestAnimationFrame(animate);
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        init();
    });
});
