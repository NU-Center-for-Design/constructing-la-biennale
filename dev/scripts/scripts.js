document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const navbar = document.querySelector('.navbar');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
  });
});


/*
// Create the element
const viewportDiv = document.createElement('div');
viewportDiv.id = 'viewport-dimensions';
viewportDiv.style.position = 'fixed';
viewportDiv.style.bottom = '10px';
viewportDiv.style.right = '10px';
viewportDiv.style.background = 'rgba(0, 0, 0, 0.7)';
viewportDiv.style.color = '#fff';
viewportDiv.style.padding = '5px 10px';
viewportDiv.style.borderRadius = '8px';
viewportDiv.style.fontFamily = 'sans-serif';
viewportDiv.style.fontSize = '14px';
viewportDiv.style.zIndex = '9999';

// Append it to the body
document.body.appendChild(viewportDiv);

// Update its content with viewport dimensions
function updateDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  viewportDiv.textContent = `${width} × ${height}`;
}

// Listen for resize and page load
window.addEventListener('resize', updateDimensions);
window.addEventListener('load', updateDimensions);
*/

