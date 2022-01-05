const cartComponent = {
    template:  `
    <div class="cart">
        <i class="fas fa-shopping-cart">
        </i>
        <p>{{ cart }}</p>
    </div>
    `,
    props: ['cart']
};

export default cartComponent;