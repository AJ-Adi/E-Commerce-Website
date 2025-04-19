// Demo Products Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 5999,
        category: "electronics",
        description: "Premium wireless headphones with noise cancellation technology.",
        image: "img/headphones.jpg",
        featured: true
    },
    {
        id: 2,
        name: "Smartphone X",
        price: 54999,
        category: "electronics",
        description: "The latest smartphone with a 6.5-inch display, 5G connectivity.",
        image: "img/smartphone.jpg",
        featured: true
    },
    {
        id: 3,
        name: "Casual Cotton T-Shirt",
        price: 1499,
        category: "clothing",
        description: "Comfortable cotton t-shirt for everyday wear.",
        image: "img/tshirt.jpg",
        featured: false
    },
    {
        id: 4,
        name: "Coffee Maker",
        price: 6999,
        category: "home",
        description: "Programmable coffee maker with a 12-cup capacity.",
        image: "img/coffeemaker.jpg",
        featured: true
    },
    {
        id: 5,
        name: "Bestselling Novel",
        price: 1199,
        category: "books",
        description: "The latest bestselling novel that's taking the world by storm.",
        image: "img/novel.jpg",
        featured: true
    },
    {
        id: 9,
        name: "Smart Watch",
        price: 15999,
        category: "electronics",
        description: "Track your fitness, receive notifications, and more.",
        image: "img/smartwatch.jpg",
        featured: true
    }
];

// Initialize the demo page
document.addEventListener('DOMContentLoaded', function() {
    // Display featured products
    displayFeaturedProducts();
    
    // Add category card click handlers
    initCategoryCards();
    
    // Log to console to help debugging
    console.log("Demo initialized, checking for images...");
});

// Display featured products in the container
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products-container');
    if (!featuredProductsContainer) return;
    
    // Get featured products
    const featuredProducts = products.filter(product => product.featured);
    
    // Display featured products
    featuredProducts.forEach(product => {
        featuredProductsContainer.appendChild(createProductCard(product));
    });
}

// Create a product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Create product image container
    const productImage = document.createElement('div');
    productImage.className = 'product-image';
    
    // Set a default background color and placeholder text
    productImage.style.backgroundColor = '#f0f2ff';
    productImage.innerHTML = '<span style="color: #aaa;">Image Not Available</span>';
    
    // Create and set up image element
    const img = document.createElement('img');
    
    // Full URL for the image (helpful for debugging)
    const imagePath = product.image;
    console.log(`Loading image: ${imagePath} for ${product.name}`);
    
    img.src = imagePath;
    img.alt = product.name;
    
    // Set image styles to ensure it displays correctly
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    
    // Handle successful image load
    img.onload = function() {
        console.log(`Successfully loaded image for ${product.name}`);
        // Clear placeholder content and show the image
        productImage.innerHTML = '';
        productImage.appendChild(img);
    };
    
    // Handle image load errors
    img.onerror = function() {
        console.log(`Failed to load image for ${product.name}`);
        // Keep the placeholder text visible
        img.style.display = 'none';
    };
    
    // Add featured badge if product is featured
    if (product.featured) {
        const featuredBadge = document.createElement('span');
        featuredBadge.className = 'featured-badge';
        featuredBadge.textContent = 'Featured';
        productImage.appendChild(featuredBadge);
    }
    
    productCard.appendChild(productImage);
    
    // Create product info container
    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';
    
    // Add product name
    const productName = document.createElement('h3');
    productName.className = 'product-name';
    productName.textContent = product.name;
    productInfo.appendChild(productName);
    
    // Add product price
    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
    productInfo.appendChild(productPrice);
    
    // Add product category
    const productCategory = document.createElement('div');
    productCategory.className = 'product-category';
    productCategory.textContent = capitalizeFirstLetter(product.category);
    productInfo.appendChild(productCategory);
    
    productCard.appendChild(productInfo);
    
    return productCard;
}

// Initialize category cards click events
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('This is a demo. Full functionality available in the complete version.');
        });
    });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
