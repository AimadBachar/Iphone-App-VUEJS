const app = Vue.createApp({
    data() {
        return {
            productName : 'Iphone 13',
            productDescription : 'Very elegant phone',
            productPrice : 1000,
            productImage : '../assets/images/iphone-13-blue.png',
            quantity: 3,
            inStock: true,
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
                },
                {
                    name: 'Camera',
                    value: '12 MP'
                },
                {
                    name: 'Battery',
                    value: '1420 mAh'
                },
                {
                    name: 'Processor',
                    value: 'Apple A13 Bionic'
                },
                {
                    name: 'Memory',
                    value: '64 GB'
                },
                {
                    name: 'OS',
                    value: 'iOS 13'
                },
                {
                    name: 'Color',
                    value: 'Blue'
                }
            ],
        }
        
    }
});
app.mount('#app');