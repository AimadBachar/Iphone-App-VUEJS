const productComponent = {
    template: `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :alt="productName">
                </div>
                <div class="product-info">
                    <h1>{{ productName }}</h1>
                    <p>{{ productDescription }}</p>
                    <p v-if="inStock">En stock</p>
                    <p v-else>Plus de stock</p>
                    <p>Caractéristiques :</p>
                    <ul>
                        <li v-for="(feature) in features" v-bind:key="feature">
                            {{ feature }}
                        </li>
                    </ul>
                    <p>Choisir une couleur</p>
                    <ul class="product-info__color">
                        <li v-for="(variant, ind) in variants" v-bind:key="variant.id" @mouseover="activeVariant = ind"  class="color" :style="{ backgroundColor: variant.color}">
                        </li>
                    </ul>
                    <button  @click="$emit('addToCart')" :disabled="!inStock" class="button" :class="{disabledButton: !inStock}">Add to cart</button>
                </div>
            </div>
        </div>
    `,
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
        }
    }
}

export default productComponent;