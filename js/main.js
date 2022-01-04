const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Very elegant phone',
            productPrice : 1000,
            productImage : '../assets/images/iphone-13-blue.png',
            quantity: 3,
            inStock: true,
        }
    }
});
app.mount('#app');