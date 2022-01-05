import ReviewformComponent from "./ReviewFormComponent.mjs";
import ReviewListComponent from "./ReviewListComponent.mjs";

const reviewZoneComponent = {
    template:  `
    <div class="review-zone">
        <review-form-component></review-form-component>
        <review-list-component></review-list-component>
    </div>
    `,
    components: {
        'review-form-component': ReviewformComponent,
        'review-list-component': ReviewListComponent
    }
};

export default reviewZoneComponent;