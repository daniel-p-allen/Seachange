<script setup>
import { RouterLink, RouterView } from 'vue-router'
import VideoPlayer from './components/VideoPlayer.vue'
import Footer from './components/footer.vue'; 
</script>

<template>
<header class="header">
  <div class="video">
    <VideoPlayer class="router-view-cyan"/>
  </div>
</header>
  
<div class="navbar-container">
  <nav class = "navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/pricing">Pricing</router-link>
    <router-link to="/faq">FAQ</router-link>
    <router-link to="/contact">Contact</router-link>
    <!-- ... other links ... -->
  </nav>
</div>

<div class="app-container">
  
  <router-view></router-view>
  <div class="footer">
    
    <Footer></Footer>
  </div>
</div>
</template>

<style scoped>
.app-container {
  display: flex;
  position: relative; /* Add this line */
  z-index: 2; /* Add this line */
  flex-direction: column; /* This makes the children stack vertically */
  width: 100%; /* Optional, but ensures it takes up the full width */
  
}
.navbar {
  display: flex;
  align-items: flex-start;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add drop shadow here */ 
  padding: 10px;  
} 

a {
  display: flex;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  align-items: flex-start;
  width: 100%; /* Optional, but ensures it takes up the full width */
  background-color: lightgrey;
  opacity: 0.9;
  justify-content: space-between;
  font-size: larger;
  text-decoration: none;
  color: white;
  
  padding: 10px; /* Add space around the entire navbar. */
}
.navbar-container {
  display: flex;
  padding: 10px;
  margin: 10px;
  z-index: 1; 
}

.view-container {
  width: 80%;
  margin-top: 5rem;
  margin-left: 5rem;
  padding: 1.5em;
  box-sizing: border-box;
} 

.router-view-cyan {
  background-color: white; 
}

.video {
  position: absolute; /* Positioned relative to app-container */
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
}

.footer {
  width: 100%; /* Span the full width of the page */
  height: 150px; /* Fixed height of 150px */
  background-color: lightgrey; /* Light grey background */
  
  display: flex; /* Use flexbox to easily center the content */
  align-items: center; /* Vertically center the content */
  justify-content: center; /* Horizontally center the content */
  
  text-align: center; /* Center the text */
}

.header {
  line-height: 1.3;
  max-height: 100vh;
}

</style>