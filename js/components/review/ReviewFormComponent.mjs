const reviewFormComponent = {
    // .prevent pour faire le e.preventDefault() en vuesJS et .number pour faire le parseInt() en vuesJS
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating ({{ rating }}):</label>
            <input type="range" id="rating" min="1" max="5" v-model.number="rating"> 
            <input type="submit" class="button" value="Submit"/>
        </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: ''
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview);
        }
    }
};


export default reviewFormComponent;