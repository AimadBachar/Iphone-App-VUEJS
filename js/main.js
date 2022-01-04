const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Téléphone très élégant',
            productPrice : 1000,
            productImage : '../assets/images/iphone-13-blue.png',
            variants: [
                { id: 1, color: '#437899', image: '../assets/images/iphone-13-blue.png' },
                { id: 2, color: '#C01728', image: '../assets/images/iphone-13-red.png' },
                { id: 3, color: '#262D34', image: '../assets/images/iphone-13-midnight.png' },
            ],
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
        updateImage(image) {
            this.productImage = image;
        }
    }
});
app.mount('#app');