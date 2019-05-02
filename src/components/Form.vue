<template>
<div class="container">
  <div id="Form" class="mt-3">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <label for="email">Email Address</label>
      <input type="text" id="email" class="form-control" v-model="userData.email">
    </div>

    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <label for="password">Password</label>
      <input type="password" id="password" class="form-control" v-model="userData.password">
    </div>

    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <label for="age">Age</label>
      <input type="number" id="age" class="form-control" v-model="userData.age">
    </div>

    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <label for="message">Your Message</label>
      <textarea rows="4" id="message" v-model="message"  class="form-control"></textarea>
    </div>
    
    
        <b-form-group label>
        <b-form-radio-group
        v-model="radioOption"
        :options="options"
        plain
        name="plain-inline"
      ></b-form-radio-group>
    </b-form-group>

    <div class="card" v-if="isSubmitted">
      <div class="card-body">
        <h4 class="card-title">Form Data</h4>
        <p>
          Mail :
          <b>{{userData.email}}</b>
        </p>
        <p>
          Password :
          <b>{{userData.password}}</b>
        </p>
        <p>
          Age :
          <b>{{userData.age}}</b>
        </p>
       <p style="white-space: pre">Message: <b>{{ message }}</b></p>
        <p>
          Gender:
          <b>{{ radioOption }}</b>
        </p>
      </div>
    </div>
  </div>
  <button class="btn btn-primary" @click="submitted">Submit</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: null
      },
      radioOption : "Male",
      options : [
          {text : 'Male',value:"Male"},
          {text : 'Female',value :"Female"}
      ],
      message: "Review.....",
     
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>

</style>
