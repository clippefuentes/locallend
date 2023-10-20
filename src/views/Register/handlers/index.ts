import { ref } from 'vue';
import { Router } from 'vue-router';
import { register } from '../../../services/webApi';

export default function useRegister(router: Router) {
  const emailRef = ref();
  const usenameRef = ref();
  const passwordRef = ref();
  const successRegisterRef = ref(false);
  const countdownRef = ref(5);

  function handleRegister(event: Event) {
    event.preventDefault();
    console.log('email:w', emailRef.value.value);
    console.log('password::', passwordRef.value.value);
    register({
      email: emailRef.value.value,
      password: passwordRef.value.value,
      username: usenameRef.value.value,
    })
      .then((res) => {
        successRegisterRef.value = true;
        const countdownInterval = setInterval(() => {
          countdownRef.value -= 1;
          if (countdownRef.value === 0) {
            clearInterval(countdownInterval);
            router.push('/login');
          }
        }, 1000);
        console.log('rest', res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    emailRef,
    passwordRef,
    usenameRef,
    successRegisterRef,
    handleRegister,
    countdownRef,
  };
}