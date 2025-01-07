//src/app/motionUtils/animation.js
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };
  
  export const slideIn = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 100 } },
  };
  
  // src/app/motionUtils/animation.js

// Animation for the entire page sliding in
export const slideInPage = {
  hidden: {
    x: '100%', // Start off-screen to the right
    opacity: 0, // Hidden initially
  },
  visible: {
    x: 0, // Move into view
    opacity: 1, // Fully visible
    transition: {
      type: 'spring', // Smooth animation with a spring effect
      stiffness: 60, // Adjust spring stiffness for the slide
      damping: 15, // Add damping for smoother motion
      duration: 0.8, // Ensure animation duration feels natural
    },
  },
  exit: {
    x: '-100%', // Slide out to the left when exiting
    opacity: 0, // Fade out
    transition: {
      type: 'tween', // Faster exit animation
      duration: 0.3, // Quicker fade out
    },
  },
};

// Stagger effect for child elements
export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2, // 200ms delay between each child's animation
    },
  },
};

// Animation for individual child elements
export const fadeInUp = {
  hidden: {
    y: 20, // Start slightly below the view
    opacity: 0, // Hidden initially
  },
  visible: {
    y: 0, // Move into view
    opacity: 1, // Fully visible
    transition: {
      duration: 0.4, // Duration for each child
      ease: 'easeOut', // Smooth easing
    },
  },
};
