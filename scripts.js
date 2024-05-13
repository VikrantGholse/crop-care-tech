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
