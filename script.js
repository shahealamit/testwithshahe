document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ 
        once: false, 
        offset: 50, 
        duration: 1000,
        easing: 'ease-out-back'
    });
    
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        const mobileBtnIcon = mobileBtn.querySelector('i');

        const toggleMenu = (show) => {
            if (show) {
                mobileMenu.classList.add('active');
                mobileBtnIcon.classList.remove('fa-bars');
                mobileBtnIcon.classList.add('fa-times');
            } else {
                mobileMenu.classList.remove('active');
                mobileBtnIcon.classList.add('fa-bars');
                mobileBtnIcon.classList.remove('fa-times');
            }
        };

        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileMenu.classList.contains('active');
            toggleMenu(!isOpen);
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                toggleMenu(false);
            }
        });
    }
});

// Filter Projects
function filterProjects(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-teal-500', 'text-white', 'border-teal-500');
        b.classList.add('border-slate-700', 'text-slate-400');
    });
    btn.classList.remove('border-slate-700', 'text-slate-400');
    btn.classList.add('bg-teal-500', 'text-white', 'border-teal-500');
    document.querySelectorAll('.project-card').forEach(card => {
        if(cat === 'all' || card.classList.contains(cat)) {
            card.style.display = 'block'; card.classList.add('aos-animate');
        } else {
            card.style.display = 'none';
        }
    });
}

// --- 4-WAY BUBBLE GENERATOR ---
function createBubbles() {
    const container = document.getElementById('four-way-bg');
    const icons = ['fa-bug', 'fa-bug', 'fa-vial', 'fa-search-plus', 'fa-check-circle', 'fa-mobile-alt'];
    const animations = ['move-up', 'move-down', 'move-left', 'move-right'];
    const colors = ['p-bug', 'p-dev', 'p-qa'];

    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement('i');
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        bubble.classList.add('fas', randomIcon, 'bubble-particle', randomAnim, randomColor);
        
        // Random Positioning
        if (randomAnim === 'move-up' || randomAnim === 'move-down') {
            bubble.style.left = Math.random() * 90 + 5 + '%';
        } else {
            bubble.style.top = Math.random() * 90 + 5 + '%';
        }

        bubble.style.animationDuration = (Math.random() * 3 + 3) + 's';
        bubble.style.animationDelay = (Math.random() * 5) + 's';
        
        if (container) {
            container.appendChild(bubble);
        }
    }
}
document.addEventListener('DOMContentLoaded', createBubbles);
