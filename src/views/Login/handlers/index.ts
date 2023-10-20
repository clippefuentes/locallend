import { ref } from 'vue';
import { Router } from 'vue-router';
import { login } from '../../../services/webApi';

export default function useLogin(router: Router) {
  const usenameRef = ref();
  const passwordRef = ref();
  const successLoginRef = ref(false);
  const countdownRef = ref(5);

  function handleLogin(event: Event) {
    event.preventDefault();
    login({
      password: passwordRef.value.value,
      username: usenameRef.value.value,
    })
      .then((res) => {
        console.log('rest', res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    passwordRef,
    usenameRef,
    successLoginRef,
    handleLogin,
    countdownRef,
  };
}