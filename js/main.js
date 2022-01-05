import app from './app.js';
import cartComponent from './components/CartComponent.mjs';
import navbarComponent from './components/NavBarComponent.mjs';
import productComponent from './components/ProductComponent.mjs';
import reviewZoneComponent from './components/review/ReviewZoneComponent.mjs';

// vue application
const appInstance = Vue.createApp(app);

// components
appInstance.component('navbar-component',navbarComponent);
appInstance.component('cart-component', cartComponent);
appInstance.component('product-component', productComponent);
appInstance.component('review-zone-component', reviewZoneComponent);

// mounting the application
appInstance.mount('#app');