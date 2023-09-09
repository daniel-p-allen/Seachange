<template>
    <div class="container">
    <h1>Services</h1>
      
    <div class="service">
      <h2>Individual Counselling</h2>
      <p>Life's journey comes with its own set of challenges. In our individual counselling sessions, we aim to carve out a safe space where you can reflect, heal, and grow. Whether you're grappling with personal identity or seeking strategies to overcome life's hurdles, Anita is here to guide you.</p>
    </div>

    <div class="service">
      <h2>LGBTQ+ Support & Counselling</h2>
      <p>Understanding oneself in a diverse spectrum can be both empowering and challenging. With Anita, delve into a safe space that understands the depth and nuances of LGBTQ+ experiences, ensuring that every individual feels seen, validated, and supported.</p>
    </div>

    <div class="service">
      <h2>Trauma & Recovery</h2>
      <p>Trauma can leave scars that aren't visible. Our trauma and recovery sessions focus on understanding these scars, healing from them, and building resilience. With Anita's expertise and compassionate approach, rediscover your strength and potential.</p>
    </div>

    <div class="service">
      <h2>Women's Counselling</h2>
      <p>Women face unique challenges, from societal expectations to personal transitions. Anita provides a supportive environment to navigate these complexities, empowering women to find their voice and strength.</p>
    </div>

    <div class="service">
      <h2>Carer Support & Counselling</h2>
      <p>Caring for others can often mean sidelining one's own needs. Our sessions aim to provide carers with the tools they need to care for themselves, ensuring they can continue their invaluable role without feeling overwhelmed or unsupported.</p>
    </div>

  
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services'
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

.service {
  background-color: #FFF3E0; /* Pale orange background */
  border-radius: 15px; /* Rounded corners for a softer appearance */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  margin: 50px; /* Space above and below each service section */
  padding: 30px; /* Padding around the text for a neat look */
}

.service h2 {
  color: #FFA500; /* Orange text for the service titles */
  margin-bottom: 15px; /* Space between the title and the description */
}

.service p {
  font-size: 1em; /* Set the font size for the service descriptions */
  line-height: 1.6; /* Improved line-height for better readability */
}

  </style>
  