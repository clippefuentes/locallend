<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Register now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              ref="emailRef"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              class="input input-bordered"
              ref="usenameRef"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              ref="passwordRef"
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary"
              v-on:click="login"
            >Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import useRegister from './hooks/mixins';

  const {
    emailRef,
    passwordRef,
    usenameRef,
    login
  } = useRegister();

  export default {
    setup() {
      return {
        emailRef,
        passwordRef,
        usenameRef,
        login
      }
    },
    // methods: {
    //   login
    // }
    // methods: {
    //   login: function(event: Event) {
    //     event.preventDefault();
    //     console.log('email::', emailRef.value)
    //     console.log('password::', passwordRef.value)
    //   },
    //   test: function() {
    //     alert('test');
    //   }
    // }
  };
</script>

<style scoped>
</style>
