const reviewFormComponent = {
    template: `
    <div class="review-form">
        <h2>Review Form</h2>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for='message'>Message</label>
                <textarea class="form-control" id="message" v-model="message"></textarea>
            </div>
            <div class="form-group">
                <label for="rating">Rating</label>
                <select class="form-control" id="rating" v-model="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    `,
    data() {
        return {
            name: '',
            message: '',
            rating: ''
        }
    },
    methods: {
        onSubmit() {
            this.$emit('review-submitted', {
                name: this.name,
                message: this.message,
                rating: this.rating
            });
            this.name = '';
            this.message = '';
            this.rating = '';
        }
    }
};


export default reviewFormComponent;