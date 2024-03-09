const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

// Function to trigger click event on next button after 2 seconds
function autoClick() {
  const nextButton = document.querySelector('.next');
  nextButton.click();
  setTimeout(autoClick, 3000); // Call autoClick function again after 2 seconds
}

// Start the auto click loop
setTimeout(autoClick, 3000);
