<template>
  <div class="container_1">
    <div>
      <h1>About Anita & Credentials</h1>
    </div>
    <div>
      <div class="avatar-quote-container">
  <div>
    <img class="avatar" src="../anita.jpg" alt="Photo of Anita Allen" />
  </div>
  <blockquote class="quote-block">
    "a tapestry of personal experiences and professional engagements"
  </blockquote>
</div>
  </div>
    <p>Anita's journey to counselling wasn't a straight path, but rather a tapestry of personal experiences and professional engagements.</p> 
    <p>A proud member of the LGBTQ+ community, her own experiences have infused her with a depth of understanding that only lived experience can offer.</p> 
    <p>Moving to Warrnambool five years ago, the sea change wasn't just a physical relocation, but a personal commitment to growth and assisting others on their journey.</p> 
      <div class="quote-container">
      <div class="quote">
        <p>"Working with Anita was life-changing. For the first time, I felt truly heard, and with her guidance, I've found a sense of peace I never thought possible." - <span>Jordan P.</span></p>
      </div>
    </div>
    <p>Professionally, roles at the Warrnambool Base Hospital and esteemed local NFPs enriched her insights. </p>
  </div>
 
 


</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.container_1 {
  margin: 11%;
  border-radius: 15px 0px 15px 0px; /* Example of partially rounded edges */
  background-color: lightgray;
  opacity: 0.8;
  padding-left: 2rem;
}
.avatar-quote-container {
  display: flex;
  align-items: center; /* This will vertically align the items in the center */
  gap: 20px; /* This will add some space between the avatar and the quote */
}

@media (max-width: 1000px) {
  .avatar-quote-container {
    flex-direction: column;
    align-items: center; /* This centers the items when stacked in column */
  }
}
.avatar {
  height: 400px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
  border: 2px solid #000;
}

.quote-block {
  max-width: 500px; /* Adjust as necessary */
  padding: 50px;
  font-size: 1.9em; /* Larger font size */
  background-color: #FFF3E0; /* Pale orange background */
  border-radius: 15px; /* Soft rounded corners */
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  line-height: 1.6; /* Improved line height for readability */
  quotes: "“" "”"; /* Defines the types of quotes to use */
  position: relative; /* Allows us to position the quote marks */
}

.quote-block:before {
  content: open-quote;
  font-size: 4em; /* Large quote mark */
  position: absolute;
  top: -3px; /* Position the quote mark slightly above the block */
  left: -3px; /* Position the quote mark slightly to the left of the block */
  color: #FFA500; /* A slightly deeper orange for contrast */
}

.quote-block:after {
  content: close-quote;
  font-size: 4em; /* Large quote mark */
  position: absolute;
  bottom: -60px; /* Adjust this value to place the quote mark in a better spot */
  right: 20px; /* Adjust this value to move it horizontally */
  color: #FFA500; /* A slightly deeper orange for contrast */
}


</style>