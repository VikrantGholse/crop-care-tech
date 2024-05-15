document.addEventListener('DOMContentLoaded', function () {
    // Dropdown menu functionality
    const servicesDropdown = document.querySelector('.services-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    servicesDropdown.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of navigating to #
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.services-dropdown')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            const productName = button.parentNode.querySelector('h3').textContent;
            const productPrice = button.parentNode.querySelector('p:nth-child(3)').textContent;

            // In a real e-commerce website, you would add the product to the cart and update the UI accordingly
            alert(`Added to cart: ${productName} - ${productPrice}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('upload-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const fileInput = document.getElementById('image-input');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/detect_disease', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            resultDiv.innerText = data.prediction;
        } catch (error) {
            console.error('Error:', error);
            resultDiv.innerText = 'An error occurred. Please try again later.';
        }
    });
});
