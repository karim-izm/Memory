import React, { useEffect } from 'react';

const Parallax = () => {
  useEffect(() => {
    if (!('requestAnimationFrame' in window) || /Mobile|Android/.test(navigator.userAgent)) {
      return;
    }

    const parallaxItems = document.querySelectorAll('[data-bss-parallax]');

    if (!parallaxItems.length) {
      return;
    }

    const defaultSpeed = 0.5;
    let visible = [];
    let scheduled;

    const handleScroll = () => {
      visible = [];

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const speed = parseFloat(item.getAttribute('data-bss-parallax-speed')) || defaultSpeed;

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible.push({ speed, node: item });
        }
      });

      cancelAnimationFrame(scheduled);

      if (visible.length) {
        scheduled = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      visible.forEach(({ speed, node }) => {
        node.style.transform = `translate3d(0, ${-window.scrollY * speed}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll(); // Initial call to handle the parallax on page load

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount

  return null; // This component only handles effects, so it doesn't render anything itself
};

export default Parallax;
