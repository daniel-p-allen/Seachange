<template>
    <div class="container">
      <h1>Pricing</h1>
      
      <div class="pricing-container">
        <div class="pricing-item">
          <h2>Standard Session</h2>
          <p>$120 per hour</p>
        </div>
        
        <div class="pricing-item">
          <h2>Concession Card Holders</h2>
          <p>We believe in accessible mental health services for all. Hence, concession card holders receive a 10% discount, bringing the session fee to $108.</p>
        </div>

        <div class="note">
          <p>Note: All sessions are billed per hour. Cancellation policy applies. Please refer to our FAQs for more information.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pricing'
  };
  </script>
  
  <style scoped>
  .container {
  margin: 11%;
  border-radius: 15px 0px 15px 0px; /* Example of partially rounded edges */
  background-color: lightgray;
  opacity: 0.8;
  padding-left: 2rem;
}

.pricing-container {
  display: grid;
  gap: 20px;
  background-color: #f8f8f8;
  padding: 20px;
  margin: 50PX;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.pricing-item {
  background-color: #FFF3E0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.pricing-item h2 {
  margin: 0 0 10px 0;
  color: #FFA500;
}

.pricing-item p {
  margin: 0;
  font-size: 1em;
  line-height: 1.6;
}

.note {
  font-style: italic;
  color: #333;
}

  </style>
  