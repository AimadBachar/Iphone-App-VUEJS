const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Téléphone très élégant',
            productPrice : 1000,
            // productImage : '../assets/images/iphone-13-blue.png',
            variants: [
                { id: 1, color: '#437899', image: '../assets/images/iphone-13-blue.png', quantity: 10 },
                { id: 2, color: '#C01728', image: '../assets/images/iphone-13-red.png', quantity: 0 },
                { id: 3, color: '#262D34', image: '../assets/images/iphone-13-midnight.png', quantity: 60 },
            ],
            // quantity: 50,
            // inStock: true,
            cart: 0,
            features: ['5G speed', 'Edge-to-edge OLED display', 'Ceramic Shield'],
            activeVariant: 0,
        }
        
    },
    computed: {
        image() {
            return this.variants[this.activeVariant].image
        },
        inStock() {
            return this.variants[this.activeVariant].quantity > 0 ? true : false
        }
    },
    methods: {
        // update the product image when the color is changed with hover
        updateImage(variant) {
            this.productImage = variant.image;
            quantityProducts(variant);
        }
    }
});
app.component('navbar-component', {
    template: `<div class="nav-bar">
    </div>
    `
});
app.component('cart-component', {
    template: `
    <div class="cart">
        <i class="fas fa-shopping-cart">
        </i>
        <p>{{ cart }}</p>
    </div>
    `,
    props: ['cart']
});
app.mount('#app');