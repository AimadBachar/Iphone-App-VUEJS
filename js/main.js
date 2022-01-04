const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Téléphone très élégant',
            productPrice : 1000,
            productImage : '../assets/images/iphone-13-blue.png',
            colors: ['red', 'blue', 'midnight'],
            quantity: 30,
            inStock: true,
            cartCount: 0,
            features: ['5G speed', 'Edge-to-edge OLED display', 'Ceramic Shield']
        }
        
    },
    methods: {
        // add a product to cart
        addToCart() {
            this.cartCount += 1;
        },
        // update the product image when the color is changed with hover
        updateProduct(color) {
            hover = false;
            this.productImage = '../assets/images/iphone-13-' + color + '.png';
        }
    }
});
app.mount('#app');