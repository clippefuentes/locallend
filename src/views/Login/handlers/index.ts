import { ref } from 'vue';
import { Router } from 'vue-router';
import { login } from '@/services/webApi';
import { manageAuthToken } from '@/services/token';

export default function useLogin(router: Router) {
  const usenameRef = ref();
  const passwordRef = ref();
  const successLoginRef = ref(false);
  const countdownRef = ref(5);

  function handleLogin(event: Event) {
    event.preventDefault();
    return login({
      password: passwordRef.value.value,
      username: usenameRef.value.value,
    })
      .then((res) => {
        const {
          data: {
            token,
            user
          }
        } = res;
        console.log('token', token)
        manageAuthToken(token)
        router.push('/marketplace');
      })
      .catch((err) => {
        console.error(err);
        throw err;
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