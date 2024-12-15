// Open Modal on Login/Sign Up Button Click
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToLogin = document.getElementById('switchToLogin');

// Open login modal
loginBtn.addEventListener('click', () => {
  modal.style.display = 'block'; // Show the modal
});

// Close modal when X button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

// Switch to Sign Up Form
switchToSignUp.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('signUpForm').style.animation = 'fadeIn 0.3s ease-in-out';
  document.getElementById('loginForm').style.animation = 'fadeOut 0.3s ease-in-out';
});

// Switch to Login Form
switchToLogin.addEventListener('click', () => {
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('loginForm').style.animation = 'fadeIn 0.3s ease-in-out';
  document.getElementById('signUpForm').style.animation = 'fadeOut 0.3s ease-in-out';
});

// Close the modal if user clicks outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// X Button Animation for Modal Close
closeModal.addEventListener('mouseover', () => {
  closeModal.style.transform = 'rotate(90deg)';
  closeModal.style.transition = 'transform 0.2s ease';
});

closeModal.addEventListener('mouseout', () => {
  closeModal.style.transform = 'rotate(0deg)';
  closeModal.style.transition = 'transform 0.2s ease';
});

// Login and Sign Up Links Hover Effect
const loginLink = document.getElementById('switchToLogin');
const signUpLink = document.getElementById('switchToSignUp');

// Add hover effect for Login link
loginLink.addEventListener('mouseover', () => {
  loginLink.style.color = '#f76b1c'; // Change color on hover
  loginLink.style.cursor = 'pointer'; // Show pointer cursor
});

loginLink.addEventListener('mouseout', () => {
  loginLink.style.color = ''; // Reset color on mouseout
});

// Add hover effect for Sign Up link
signUpLink.addEventListener('mouseover', () => {
  signUpLink.style.color = '#f76b1c'; // Change color on hover
  signUpLink.style.cursor = 'pointer'; // Show pointer cursor
});

signUpLink.addEventListener('mouseout', () => {
  signUpLink.style.color = ''; // Reset color on mouseout
});
// Elements for the contact popup
const emergencyServicesCard = document.getElementById('emergencyServices');
const ngosCard = document.getElementById('ngos');
const relativesCard = document.getElementById('relatives');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');
const contactList = document.getElementById('contactList');

// Data for contact numbers (You can dynamically load this as per your needs)
const contacts = {
  emergencyServices: ['Fire Department: 101', 'Police: 100', 'Ambulance: 102'],
  ngos: ['Ratchagam Trust: +91 94980 20773', 'Atmasanga Environment Alliance: +91 98437 00299'],
  relatives: ['Lakshmi: +91 98765 43210', 'Ramya: +91 98765 43210', 'Deepika: +91 90234 56789']
};

// Function to populate and show the contact numbers in the popup
function showContactNumbers(contactType) {
  // Clear previous contact numbers and show loading text
  contactList.innerHTML = '<li>Loading contacts...</li>';
  
  // Simulate a delay (e.g., loading from a database or API)
  setTimeout(() => {
    if (contacts[contactType] && contacts[contactType].length > 0) {
      contactList.innerHTML = ''; // Clear loading text
      contacts[contactType].forEach(contact => {
        const li = document.createElement('li');
        li.textContent = contact;
        contactList.appendChild(li);
      });
    } else {
      contactList.innerHTML = '<li>No contacts available</li>';
    }
  
    // Show the popup
    contactPopup.style.display = 'block';
  }, 500); // Simulate loading delay (500ms)
}

// Event listeners for opening the contact popup
emergencyServicesCard.addEventListener('click', () => {
  showContactNumbers('emergencyServices');
});

ngosCard.addEventListener('click', () => {
  showContactNumbers('ngos');
});

relativesCard.addEventListener('click', () => {
  showContactNumbers('relatives');
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  contactPopup.style.display = 'none';
});

// Close the popup if the user clicks outside the popup
window.addEventListener('click', (event) => {
  if (event.target === contactPopup) {
    contactPopup.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const popup = document.getElementById("popup");
  const popupDescription = document.getElementById("popup-description");
  const closePopup = document.querySelector(".close-popup");

  let currentIndex = 0;

  // Update Carousel Position
  function updateCarousel() {
    const offset = currentIndex * -50; // 50% width for two items at a time
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Scroll Left
  leftArrow.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  // Scroll Right
  rightArrow.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, items.length - 2);
    updateCarousel();
  });

  // Open Popup
  items.forEach((item) => {
    const image = item.querySelector(".carousel-image");
    image.addEventListener("click", () => {
      const description = image.getAttribute("data-description");
      popupDescription.textContent = description;
      popup.style.display = "block";
    });
  });

  // Close Popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close Popup on Outside Click
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
const slider = document.querySelector('.slider');
let isDown = false;

function slide() {
  let firstSlide = slider.children[0];
  slider.appendChild(firstSlide);
}

setInterval(slide, 4000); // Adjust speed as per your preference
function toggleDropdown() {
  const dropdown = document.getElementById("profile-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function logout() {
  alert("Logging out...");
  // Add logout logic here (e.g., clearing tokens, redirecting to login page).
}
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

