const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Very elegant phone',
            productPrice : 1000,
            productImage : '../assets/images/iphone-13-blue.png',
            quantity: 30,
            inStock: true,
            cartCount: 0,
            features: [
                {
                    name: 'Dimensions',
                    value: '4.7 x 1.8 x 7.9 cm'
                },
                {
                    name: 'Weight',
                    value: '143 g'
                },
                {
                    name: 'Display',
                    value: '5.8 inch'
                }
            ],
        }
        
    },
    methods: {
        addToCart() {
            this.cartCount += 1;
        },
        removeFromCart() {
            this.cartCount -= 1;
        }
    }
});
app.mount('#app');