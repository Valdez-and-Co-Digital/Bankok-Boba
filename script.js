document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Toggle
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    const mobileDrawer = document.querySelector('#mobile-menu-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.add('hidden');
            });
        });
    }

    // Collapsible Ramen Builder Toggle
    const ramenToggleBtn = document.querySelector('#ramen-toggle-btn');
    const ramenContent = document.querySelector('#ramen-builder-content');
    const ramenToggleIcon = document.querySelector('#ramen-toggle-icon');
    const ramenToggleLabel = document.querySelector('#ramen-toggle-label');

    function expandRamenBuilder() {
        if (!ramenContent) return;
        ramenContent.classList.remove('hidden');
        if (ramenToggleIcon) ramenToggleIcon.style.transform = 'rotate(180deg)';
        if (ramenToggleLabel) ramenToggleLabel.textContent = 'Collapse Ramen Builder';
    }

    function collapseRamenBuilder() {
        if (!ramenContent) return;
        ramenContent.classList.add('hidden');
        if (ramenToggleIcon) ramenToggleIcon.style.transform = 'rotate(0deg)';
        if (ramenToggleLabel) ramenToggleLabel.textContent = 'Customize & Build Your Bowl';
    }

    function toggleRamenBuilder() {
        if (!ramenContent) return;
        if (ramenContent.classList.contains('hidden')) {
            expandRamenBuilder();
        } else {
            collapseRamenBuilder();
        }
    }

    if (ramenToggleBtn) {
        ramenToggleBtn.addEventListener('click', toggleRamenBuilder);
    }

    // Smooth Scrolling for Anchors (with auto-expand for Ramen Builder)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            // If clicking a link to #customize-ramen, auto expand the builder!
            if (targetId === '#customize-ramen') {
                expandRamenBuilder();
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Business Open/Closed Status
    // Business Hours (Central Time):
    //   Mon: Closed
    //   Tue-Sun: 12:00 PM - 8:00 PM
    function updateOpenStatus() {
        const now = new Date();
        const ct = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
        const day = ct.getDay();      // 0=Sun, 1=Mon, 2=Tue ... 6=Sat
        const hour = ct.getHours();
        const minute = ct.getMinutes();
        const timeVal = hour * 60 + minute; // minutes since midnight

        const openTime  = 12 * 60; // 12:00 PM = 720
        const closeTime = 20 * 60; // 8:00 PM  = 1200
        const isClosedDay = day === 1; // Monday
        const isOpen = !isClosedDay && timeVal >= openTime && timeVal < closeTime;

        // Select all status badges
        const navBadge = document.querySelector('#open-status-nav');
        const drawerBadge = document.querySelector('#open-status-mobile-drawer');
        const heroBadge = document.querySelector('#open-status-hero');
        const locationBadge = document.querySelector('#open-status-location');

        let statusText = '';
        let badgeClass = '';

        if (isOpen) {
            statusText = '● Open Now';
            badgeClass = 'status-badge status-open';
        } else if (isClosedDay) {
            statusText = '● Closed Today (Mon)';
            badgeClass = 'status-badge status-closed';
        } else {
            statusText = '● Closed Now';
            badgeClass = 'status-badge status-closed';
        }

        if (navBadge) {
            navBadge.textContent = statusText;
            navBadge.className = badgeClass;
        }
        if (drawerBadge) {
            drawerBadge.textContent = statusText;
            drawerBadge.className = badgeClass;
        }
        if (heroBadge && !isClosedDay) {
            heroBadge.textContent = `Pleasanton, TX • ${isOpen ? 'Open Now (12PM-8PM)' : 'Opens 12:00 PM'}`;
        }
        if (locationBadge) {
            locationBadge.innerHTML = `<span class="${badgeClass}">${statusText}</span>`;
        }
    }

    updateOpenStatus();
    setInterval(updateOpenStatus, 60000); // Check every 60 seconds
});
