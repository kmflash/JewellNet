<template>
  <section class="about">
    <div class="about__header">
      <div class="h2-wrapper">
        <h2>About Me</h2>
      </div>
    </div>
    <div class="about__content">
      <div class="about__content-photo">
        <img :src="this.bioPhoto" alt="David Jewell">
      </div>
      <div class="about__content-long-bio" v-html="this.longBio"></div>
    </div>
    <section class="about__contact">
      <div class="h2-wrapper">
        <h2>Contact</h2>
      </div>
      <form action="" id="contact-form" v-on:submit.prevent="submitForm">
          <div class="contact-form__group">
            <label for="name">Name</label>
            <input type="text" name="name" v-model.lazy="name" v-on:blur="checkName" :class="{valid: this.nameValid}">
          </div>
          <div class="contact-form__group">
            <label for="email">Email</label>
            <input type="email" name="email" v-model.lazy="email" v-on:blur="checkEmail" :class="{valid: this.emailValid}">
          </div>
          <div class="contact-form__group">
            <label for="name">Message</label>
            <textarea name="message" rows="5" v-model.lazy="message" v-on:blur="checkMessage" :class="{valid: this.messageValid}"></textarea>
          </div>
          <div class="contact-form__group">
            <button type="submit" :disabled="validForm == false">Send 💌</button>
          </div>
        </form>
    </section>
  </section>
</template>

<script>
// utilizes elements from https://github.com/jcottrell/vue-example-contact-form
export default {
  name: "about",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      maxLength: 500, // maximum length for email
      validForm: false,
      nameValid: false,
      emailValid: false,
      messageValid: false
    };
  },
  props: ["longBio", "bioPhoto"],
  mounted() {
    document.body.id = "about";
    document.body.className = "scrolled";
  },
  methods: {
    checkName: function() {
      var valid = this.name.length > 0;
      console.log("name:", valid);
      valid == true ? (this.nameValid = true) : (this.nameValid = false);
      this.checkForm();
    },
    checkEmail: function() {
      var valid = this.email.indexOf("@") > 0;
      console.log("email:", valid);
      valid == true ? (this.emailValid = true) : (this.emailValid = false);
      this.checkForm();
    },
    checkMessage: function() {
      var valid =
        this.message.length > 0 && this.message.length <= this.maxLength;
      console.log("message:", valid);
      valid == true ? (this.messageValid = true) : (this.messageValid = false);
      this.checkForm();
    },
    checkForm: function() {
      console.log("Checking to make sure form is valid...");
      if (
        this.nameValid == true &&
        this.emailValid == true &&
        this.messageValid == true
      ) {
        this.validForm = true;
      }
      console.log(this.validForm);
    }
  }
};
</script>
