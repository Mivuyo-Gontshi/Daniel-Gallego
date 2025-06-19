// AOS animations
AOS.init({
  duration: 800,
  once: true
});

// Swiper slider setup
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
      loop: true,
      pagination: { el: '.swiper-pagination' },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

// Header and navigation styles
const header = document.querySelector('.main-header');
const navLinks = document.querySelectorAll('.nav_links li a');
const ctaButton = document.querySelector('.cta button');
const footer = document.querySelector('.footer');

if (header) {
  header.style.transition = 'box-shadow 0.3s';
  header.addEventListener('mouseover', () => {
    header.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
    header.style.background = 'rgba(255,255,255,0.95)';
  });
  header.addEventListener('mouseout', () => {
    header.style.boxShadow = '';
    header.style.background = '';
  });
}

navLinks.forEach(link => {
  link.style.transition = 'color 0.2s';
  link.addEventListener('mouseover', () => {
    link.style.color = '#e67e22';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '';
  });
});

if (ctaButton) {
  ctaButton.style.background = 'linear-gradient(90deg, #e67e22, #f6d365)';
  ctaButton.style.color = '#fff';
  ctaButton.style.fontWeight = 'bold';
  ctaButton.style.border = 'none';
  ctaButton.style.borderRadius = '25px';
  ctaButton.style.padding = '0.75rem 2rem';
  ctaButton.style.cursor = 'pointer';
  ctaButton.style.transition = 'background 0.3s, transform 0.2s';
  ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.background = 'linear-gradient(90deg, #f6d365, #e67e22)';
    ctaButton.style.transform = 'scale(1.05)';
  });
  ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.background = 'linear-gradient(90deg, #e67e22, #f6d365)';
    ctaButton.style.transform = '';
  });
}

if (footer) {
  footer.style.background = '#222';
  footer.style.color = '#fff';
  footer.style.textAlign = 'center';
  footer.style.padding = '1.5rem 0';
  footer.style.transition = 'background 0.3s';
  footer.addEventListener('mouseover', () => {
    footer.style.background = '#444';
  });
  footer.addEventListener('mouseout', () => {
    footer.style.background = '#222';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate sections on scroll (fade/slide/scale)
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px) scale(0.98)';
});

function animateSectionsOnScroll() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.style.transition = 'opacity 0.7s, transform 0.7s';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0) scale(1)';
    }
  });
}
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);

// Animate cart pop effect (if cart-items exists)
const cartItems = document.getElementById('cart-items');
if (cartItems) {
  cartItems.addEventListener('DOMSubtreeModified', () => {
    cartItems.classList.remove('cart-animate');
    void cartItems.offsetWidth; // trigger reflow
    cartItems.classList.add('cart-animate');
  });
}

// Toast notification animation
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  toast.style.opacity = 1;
  toast.style.transition = 'opacity 0.5s';
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => { toast.style.display = 'none'; }, 500);
  }, 2000);
}
  toast.style.display = 'block';
  toast.style.opacity = 1;
  toast.style.transition = 'opacity 0.5s';
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => { toast.style.display = 'none'; }, 500);
  }, 2000);
}
