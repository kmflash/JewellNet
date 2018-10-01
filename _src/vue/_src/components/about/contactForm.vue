<template>
  <form id="contact-form" v-on:submit.prevent="submitForm">
    <div class="contact-form__submitting-message" v-if="this.submitting == true">
      <h3>{{formMsg}}</h3>
    </div>
    <div class="contact-form__group name-group" v-if="!this.submitting">
      <label for="name" :class="{invalid: this.nameValid === false}">Name</label>
      <input type="text" name="name" v-model.lazy="name" v-on:blur="checkName" :class="{valid: this.nameValid, invalid: this.nameValid === false}">
      <small class="contact-form__error-text" v-if="this.nameValid === false">Please enter your name</small>
    </div>
    <div class="contact-form__group email-group" v-if="!this.submitting">
      <label for="email" :class="{invalid: this.emailValid === false}">Email</label>
      <input type="email" name="email" v-model.lazy="email" v-on:blur="checkEmail" :class="{valid: this.emailValid, invalid: this.emailValid === false }">
      <small class="contact-form__error-text" v-if="this.emailValid === false">Hmm, might want to check that address. 🤔</small>
    </div>
    <div class="contact-form__group message-group" v-if="!this.submitting">
      <label for="name" :class="{invalid: this.messageValid === false}">Message</label>
      <textarea name="message" rows="5" :maxlength="this.maxLength" v-model="message" v-on:blur="checkMessage" :class="{valid: this.messageValid, invalid: this.messageValid === false}"></textarea>
      <small class="contact-form__requirments">Characters remaining {{this.checkMessageChars()}} <br> Please, no HTML</small>
      <small class="contact-form__error-text" v-if="this.messageValid === false">Please enter a message. I'd love to hear from you!</small>
    </div>
    <div class="contact-form__group" v-if="!this.submitting">
      <button type="submit" :disabled="validForm == false" class="contact-form__submit-button">Send 💌</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      maxLength: 500, // maximum length for message body
      validForm: false,
      nameValid: null,
      emailValid: null,
      messageValid: null,
      submitting: null,
      formMsg: "Thanks for saying 👋"
    };
  },
  methods: {
    checkName: function() {
      // Check to make sure they entered something.
      // Criteria: at least 1 character that isn't white space
      var valid =
        this.name.length > 0 && this.name.replace(/\s/g, "").length > 0;
      if (valid == true) {
        this.nameValid = true;
      } else {
        this.nameValid = false;
      }
      this.checkForm();
    },
    checkEmail: function() {
      // Check against RFC822 standard
      // For info see https://stackoverflow.com/a/1373724
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      var valid = re.test(this.email);
      valid == true ? (this.emailValid = true) : (this.emailValid = false);
      this.checkForm();
    },
    checkMessageChars: function() {
      var msg = this.message.length;
      var remaining = this.maxLength - msg;

      if (msg == 1) this.checkMessage();

      return remaining;
    },
    checkMessage: function() {
      // Check to make sure something was entered
      // Criteria: 1 to 500 chars
      var valid =
        this.message.length > 0 && this.message.length <= this.maxLength;
      valid == true ? (this.messageValid = true) : (this.messageValid = false);
      this.checkForm();
    },
    checkForm: function() {
      if (
        this.nameValid == true &&
        this.emailValid == true &&
        this.messageValid == true
      ) {
        this.validForm = true;
        console.log("Huzzah, the form is valid 🎉");
      } else {
        this.validForm = false;
        console.log(
          "Checking form... \n Name:",
          this.nameValid,
          "\n Email:",
          this.emailValid,
          "\n Message:",
          this.messageValid
        );
      }
    },
    submitForm: function() {
      // TODO prevent form from submitting if name, email, or message
      //      are invalid and display message
      // TODO submit to form processor
      console.log("submitting message...");
      this.submitting = true;

      var formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("email", this.email);
      formdata.append("message", this.message);
      this.axios
        .post("/sendMail.php", formdata)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
