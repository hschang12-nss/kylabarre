/* nav.js – injects shared nav, sync banner, and footer */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'classes.html',  label: 'Classes' },
    { href: 'schedule.html', label: 'Schedule' },
    { href: 'privates.html', label: 'Privates' },
    { href: 'contact.html',  label: 'Contact' },
    { href: 'booking.html',  label: 'Book Now', cta: true },
  ];

  const navHTML = `
<nav>
  <a href="index.html" class="nav-logo">Kyla Chang <span>//</span> Barre &amp; Fitness</a>
  <ul class="nav-links" id="navLinks">
    ${links.map(l => `
      <li><a href="${l.href}"
        class="${l.cta ? 'nav-cta' : ''}${page === l.href && !l.cta ? ' active' : ''}"
      >${l.label}</a></li>`).join('')}
  </ul>
  <button class="nav-mobile-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')" aria-label="Menu">☰</button>
</nav>
<div class="sync-banner">
  <div class="sync-icon">
    <svg viewBox="0 0 24 24" fill="white" width="17" height="17"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
  </div>
  <div class="sync-text">
    <strong>Live two-way sync with your iPhone calendar</strong>
    <span>Every booking, cancellation &amp; reschedule updates automatically.</span>
  </div>
  <a href="booking.html" class="btn-outline sm" style="border-color:rgba(255,255,255,0.5);">Book Now →</a>
</div>`;

  const footerHTML = `
<footer>
  <div class="footer-brand">
    <a href="index.html" class="nav-logo">Kyla Chang <span>//</span> Barre &amp; Fitness</a>
    <p>Part of Lisa's Dance Spot &nbsp;·&nbsp; Bookings powered by Acuity Scheduling</p>
  </div>
  <ul class="footer-links">
    <li><a href="classes.html">Classes</a></li>
    <li><a href="schedule.html">Schedule</a></li>
    <li><a href="privates.html">Privates</a></li>
    <li><a href="booking.html">Book Now</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</footer>`;

  document.getElementById('site-nav').innerHTML = navHTML;
  document.getElementById('site-footer').innerHTML = footerHTML;
})();
