<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Register now!</h1>
        <p class="py-6">
          
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
              v-on:click="handleRegister"
            >Register</button>
          </div>
        </form>
      </div>
      <div v-if="successRegisterRef" class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Register successfully, will redirect you to login in {{ countdownRef.toFixed() }} seconds</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router';
  import useRegister from './handlers';

  export default {
    setup() {
      const router = useRouter();
      const {
        emailRef,
        passwordRef,
        usenameRef,
        successRegisterRef,
        countdownRef,
        handleRegister
      } = useRegister(router);
      
      return {
        emailRef,
        passwordRef,
        usenameRef,
        successRegisterRef,
        countdownRef,
        handleRegister
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
