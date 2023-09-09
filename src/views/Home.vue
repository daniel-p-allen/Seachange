<script setup>


</script>

<template>
  
  <main>
    <div class="container">
   
    <!-- Additional content or call-to-action elements -->
    <div class = "header-container">
    <div>
      <img class="avatar" src="../anita.jpg" alt="Photo of Anita Allen" />
    </div>
    <div class = "title">
      <h1>Seachange Counselling</h1>
    </div>
    </div>
    
    <!-- 
  <div class="quote">
    <p>"From our first meeting, Anita provided a safe space where I could express myself without judgment. Thanks to her, I've gained invaluable insights and tools to navigate my daily challenges." - <span>Liam S.</span></p>
  </div> -->
    <p>Where Every Wave Brings Renewed Understanding. Join Anita, your guide through the seas of personal growth, understanding, and self-love.</p>
  
    <div class="hook-statement">
      One of the most cited benefits of therapy comes from a well-regarded meta-analysis (which is an analysis of multiple studies). This analysis often points out that, on average, people who receive therapy are better off by the end of treatment than approximately 80% of those who do not get professional help.
    </div>
    <p>Discovering clarity in chaos and strength in vulnerability is a journey. Start yours today and see why countless others have found renewed hope and resilience through counseling.</p>
    
    <div class = "quote-container">
    <div class="quote">
      <p>"Anita's genuine compassion combined with her professional expertise made each session enlightening. I'm so grateful for the progress we've made together." - <span>Ella T.</span></p>
    </div>
    </div>
    <br>
    <hr>
    <h3>Signup for Updates - stay connected with insights, articles, and resources.</h3>
    <div class="mailing-list">
      <form action="/path_to_your_server_endpoint" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone">

      <div class="preferences">
        <label>Include me in:</label>
        <div>
          <input type="checkbox" id="generalMail" name="preferences" value="generalMail">
          <label for="generalMail">General Mail</label>
        </div>
        <div>
          <input type="checkbox" id="promotions" name="preferences" value="promotions">
          <label for="promotions">Promotions</label>
        </div>
        <div>
          <input type="checkbox" id="partnerPromotions" name="preferences" value="partnerPromotions">
          <label for="partnerPromotions">Partner Promotions</label>
        </div>
      </div>
      
      <button type="submit">Sign Up</button>
    </form>
</div>

    
  </div>
    
  </main>
</template>

<style>
.container {
  margin: 11%;
  border-radius: 15px 0px 15px 0px; /* Example of partially rounded edges */
  background-color: lightgray;
  opacity: 0.8;
  padding-left: 2rem;
}

.title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: xx-large;
  font-weight: bold;
  color: white;
  margin: 30px 30px 30px 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add drop shadow here */
}

.header-container {
  display: flex; 
}

.avatar {
  height: 250px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 30%;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
  margin: 30px 30px 30px 30px;
}

.quote-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.quote {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.quote p {
  font-size: 1.4em;
  line-height: 1.6;
  color: #333;
}

.quote span {
  font-weight: bold;
  color: #007BFF;
}

.mailing-list {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.mailing-list form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mailing-list label {
  font-weight: bold;
}

.mailing-list input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.mailing-list .preferences {
  display: flex;
  flex-direction: column;
}

.mailing-list .preferences div {
  display: flex;
  align-items: center;
}

.mailing-list button {
  padding: 10px;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.mailing-list button:hover {
  background-color: #218838;
}

.hook-statement {
  background-color: #FFF3E0; /* A light orange background for contrast */
  color: #FFA500; /* Orange text color */
  font-size: 1.2em; /* Slightly larger font size */
  padding: 20px; /* Padding around the text for a neat look */
  border-radius: 15px; /* Rounded corners for a softer appearance */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* A subtle shadow for depth */
  margin: 20px 50px 20px 20px; /* Space above and below the hook statement */
  text-align: left; /* Centered text for emphasis */
  line-height: 1.5; /* Improved line-height for better readability */
}

</style>

