"use strict";

// create const variable for buttons? or maybe a form selector?
const buttons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.portfolio-item');

// some kind of querySelector for all portoflio items?

// buttons and eventListeners
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    //forEach to display or not disply portfolio itemms based on category
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});