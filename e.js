document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product-card button');
    const cartCount = document.getElementById('cart-count');
    const brandFilter = document.getElementById('brand');
    let cartItemCount = 0;

    // Add to Cart functionality
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            cartCount.textContent = cartItemCount;
            alert('Added to cart!');
        });
    });

    // Product filtering functionality
    brandFilter.addEventListener('change', () => {
        const selectedBrand = brandFilter.value;
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            if (selectedBrand === 'all' || card.getAttribute('data-brand') === selectedBrand) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
