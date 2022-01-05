import app from './app.js';
import cartComponent from './components/CartComponent.mjs';
import navbarComponent from './components/NavBarComponent.mjs';

// vue application
const appInstance = Vue.createApp(app);

// components
appInstance.component('navbar-component',navbarComponent);
appInstance.component('cart-component', cartComponent);

// mounting the application
appInstance.mount('#app');