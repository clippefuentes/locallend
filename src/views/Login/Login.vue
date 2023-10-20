<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col ">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
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
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              class="input input-bordered"
              ref="usenameRef"
              required
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
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary"
              v-on:click="handleLogin">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router';
  import useLogin from './handlers';

  export default {
    setup() {
      const router = useRouter();
      const {
        passwordRef,
        usenameRef,
        countdownRef,
        handleLogin
      } = useLogin(router);
      
      return {
        passwordRef,
        usenameRef,
        countdownRef,
        handleLogin
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
