<template>
    <div class="container">
      <h1>FAQ</h1>
      <H2>Click the question to reveal the response.</H2>
      <div class="faq-container">
        <div class="faq-item">
            <div class="faq-question">Q: Why is it essential to have a counsellor with lived LGBTQ+ experience?</div>
            <div class="faq-answer">A: A counsellor with lived experience offers genuine empathy and an in-depth understanding, fostering a safe and affirming space for clients.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: How is LGBTQ+ counselling different from general counselling?</div>
            <div class="faq-answer">A: LGBTQ+ counselling emphasizes unique issues like identity exploration, societal acceptance, and understanding LGBTQ+ specific challenges, while general counselling addresses broader life challenges.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Are sessions confidential?</div>
            <div class="faq-answer">A: Absolutely. Client confidentiality is of utmost importance. All sessions and records are kept private unless there's a legal obligation to disclose.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: How often should I attend sessions?</div>
            <div class="faq-answer">A: The frequency depends on individual needs. Some may benefit from weekly sessions, while others might opt for bi-weekly or monthly check-ins.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Do you offer remote or online sessions?</div>
            <div class="faq-answer">A: Yes, online sessions are available for those who cannot attend in person or prefer the convenience of virtual counselling.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: How do I know if counselling is right for me?</div>
            <div class="faq-answer">A: If you're facing challenges or seeking clarity in any area of your life, counselling can be beneficial. It provides a non-judgmental space to explore and understand yourself better.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: What's your cancellation policy?</div>
            <div class="faq-answer">A: Sessions cancelled less than 24 hours in advance will be charged 50% of the session fee. Please contact us for emergencies or specific concerns.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Can I choose the focus of my sessions?</div>
            <div class="faq-answer">A: Yes, the sessions are client-driven, and your concerns and goals will shape the direction.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: How does the discount for concession card holders work?</div>
            <div class="faq-answer">A: Concession card holders receive a 10% discount on the standard fee. Kindly present your card during the first session to avail of the discount.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: What can I expect in the first session?</div>
            <div class="faq-answer">A: The first session is about understanding your needs, setting goals, and building trust. It lays the foundation for our journey together.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: How long do people typically see a counsellor?</div>
            <div class="faq-answer">A: The duration varies. Some find resolution in a few sessions, while others engage in long-term counselling. It's a personal journey.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Do you provide resources for self-help and growth?</div>
            <div class="faq-answer">A: Yes, we offer a range of resources, from articles to recommended readings, to support your journey outside of sessions.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Can I switch between in-person and online sessions?</div>
            <div class="faq-answer">A: Absolutely. We offer flexibility to cater to your needs and comfort.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Is there parking available at your location?</div>
            <div class="faq-answer">A: Yes, free parking is available for clients.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Q: Do you offer group therapy or workshops?</div>
            <div class="faq-answer">A: Currently, our focus is on individual counselling. However, workshops and group sessions might be introduced in the future. Stay tuned for updates.</div>
        </div>
    </div>
    </div>  
  </template>
  
  <script>
  export default {
    name: 'faq',
    mounted() {
      document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', event => {
          event.currentTarget.nextElementSibling.classList.toggle('open');
        });
      });
    }
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

.faq-container {
    display: block;
    background-color: #f8f8f8;
    padding: 20px;
    margin: 50px;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.faq-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.faq-question {
    font-size: larger;
    font-weight: bold;
    cursor: pointer;
    color: #FFA500;
}

.faq-answer {
    font-size: larger;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding-left: 20px;
    border-left: 2px solid #FFA500;
    margin-top: 10px;
    color: #333;
}

.faq-answer.open {
    max-height: 200px; /* adjust as needed */
}

  </style>
  