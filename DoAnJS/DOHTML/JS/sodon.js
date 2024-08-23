<script>
    // Function to update the cart count
    function updateCartCount() {
        // Fetch the current cart items from local storage (assuming it's stored as an array)
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Get the number of items in the cart
        let itemCount = cartItems.length;

        // Update the cart count in the HTML
        let cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = itemCount;
        } else {
            console.error('Cart count element not found');
        }
    }

    // Call the function to update the cart count on page load
    document.addEventListener('DOMContentLoaded', updateCartCount);

    // Function to add an item to the cart
    function addItemToCart(item) {
        // Fetch the current cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add the new item to the cart
        cartItems.push(item);

        // Save the updated cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update the cart count
        updateCartCount();
    }

    // Function to remove an item from the cart by item ID
    function removeItemFromCart(itemId) {
        // Fetch the current cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Filter out the item to remove
        cartItems = cartItems.filter(item => item.id !== itemId);

        // Save the updated cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update the cart count
        updateCartCount();
    }

    // Example item to add (this can be triggered by a button click or other event)
    let newItem = {
        id: 1,
        name: 'Sample Product',
        price: 29.99
    };

    // Add the item to the cart and update the count
    addItemToCart(newItem);

    // Remove the item with ID 1 from the cart and update the count
    removeItemFromCart(1);
</script>
