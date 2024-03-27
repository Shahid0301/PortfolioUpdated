import React from 'react';

function ScrollToTopButton() {
  // Always visible
  const isVisible = true;

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="fixed bottom-8 right-8 bg-subheading text-white px-4 py-2 rounded-full z-10" onClick={scrollToTop}>
          <i className="fas fa-arrow-up "></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
