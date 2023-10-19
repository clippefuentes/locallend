import { ref } from 'vue'
import { register } from '../../../services/webApi';

export default function useRegister() {
  const emailRef = ref();
  const usenameRef = ref();
  const passwordRef = ref();

  function login(event: Event) {
    event.preventDefault();
    console.log('email:w', emailRef.value.value)
    console.log('password::', passwordRef.value.value)
    register({
      email: emailRef.value.value,
      password: passwordRef.value.value,
      username: usenameRef.value.value
    })
    .then((res) => {
      console.log('rest', res)
    })
  }

  return {
    emailRef,
    passwordRef,
    usenameRef,
    login
  }
}