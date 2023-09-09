<template>
    
    <div class="container">
      <h1>Contact</h1>
      <br>
      <h2>
        Please fill out the contact form below and a member of our team will get back to you as soon as possible.
      </h2>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" v-model="formData.name"><br>

          <label for="email">Email:</label><br>
          <input type="text" id="email" name="email" v-model="formData.email"><br>
          
          <label for="phone">Phone:</label><br>
          <input type="text" id="phone" name="phone" v-model="formData.phone"><br>

          <label for="message">How can we assist you?</label><br>
          <textarea id="message" name="message" rows="4" cols="50" v-model="formData.message"></textarea><br>

          <label>
            <input type="checkbox" v-model="formData.subscribe"> Subscribe to newsletter
          </label>
          <br>

          <h3>How did you hear about us?</h3>
          <span>Selected: {{ selected_option }}</span>
          <br>
          <select v-model="selected_option">
            <option disabled value="">Please select one</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Friend or family</option>
            <option>Healthcare provider</option>
            <option>Other</option>
          </select>
          <br><br>
          
          <h3>Are you interested in specific counselling services?</h3>
          <div v-for="service in services" :key="service.value">
              <input type="checkbox" 
              :id="service.value" 
              :value="service.value" v-model="formData.interestedServices" />
              <label :for="service.value">{{ service.text }}</label>
              <br>
          </div>
          <br>
          <input type="submit" value="Send">
          <input type="button" value="Reset" @click="resetForm">

          <div v-if="submitted" class="success-card">
            Your message has been submitted. Thanks, and we will get back to you soon!
          </div>

          <div v-if="resetAction" class="reset-notification">
            Form fields cleared.
          </div>
        </form>
  </div>
    </div>  
  </template>
  
  <script>
  export default {
  data() {
    return {
        formData: {
            name: '',
            email: '',
            phone: '',
            message: '',
            subscribe: false,
            interestedServices: []
        },
        submitted: false,
        name: 'Contact Seachange Counselling',  
        resetAction: false,  
        selected_option: "Use the dropdown to select an option",
        services: [
          { text: 'Individual Counselling', value: 'individual' },
          { text: 'LGBTQ+ Support & Counselling', value: 'lgbtq' },
          { text: 'Trauma & Recovery', value: 'trauma' },
          { text: "Women's Counselling", value: 'women' },
          { text: 'Carer Support & Counselling', value: 'carer' }
      ],
    };
  },
  methods: {
    resetForm() {
      this.formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          subscribe: false,
          interestedServices: []
      };
      this.selected_option = "Use the dropdown to select an option";
      this.resetAction = true;
      setTimeout(() => {
          this.resetAction = false;
      }, 3000);
    },
    submitForm() {
      console.log("Form submitted with data:", this.formData);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    },  
  }
}
  </script>
  
  <style scoped>
.form-container {
  max-width: 600px;
  margin: 2em;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: grid;
  grid-gap: 1em;
  font-family: 'Montserrat', sans-serif;
}

label {
  margin-bottom: .0em; /* Adjusted margin to reduce space */
  color: #333333;
  font-weight: bold;
}

input[type="text"], input[type="email"], input[type="tel"], textarea, select {
  width: 100%;
  
  padding: .5em;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 1em;
}

textarea {
  resize: vertical;
}

input[type="checkbox"], input[type="radio"] {
  margin-right: .5em;
}

input[type="submit"], input[type="button"] {
  padding: .8em 1.5em;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;
  background-color: #59b7d4;
  color: white;
  transition: background-color 0.3s;
}

input[type="submit"]:hover, input[type="button"]:hover {
  background-color: #469cb0;
}

.success-card, .reset-notification {
  padding: 1em;
  border-radius: 6px;
  margin-top: 1em;
}

.success-card {
  background-color: #D4EDDA;
  color: #155724;
}

.reset-notification {
  background-color: #FFF3CD;
  color: #856404;
}

@media (max-width: 768px) {
  .form-container {
    padding: 1em;
  }

  input[type="text"], input[type="email"], input[type="tel"], textarea, select {
    font-size: .9em;
  }
}
</style>

  