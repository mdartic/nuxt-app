<template>
  <h3>Page de connexion</h3>
  <form @submit.prevent="login">
    <input type="text" name="email" v-model="auth.email" /><br/>
    <input type="password" name="password" v-model="auth.password" /><br/>
    <button type="submit">Se connecter</button>

    {{ status }}
    {{ data }}
    {{ token }}
  </form>
</template>

<script setup lang="ts">
  const auth = reactive({
    email: "admin@sapiens",
    password: "supersecret",
    strategy: 'local',
  })
  const { status, data, signIn, token } = useAuth()
  console.log(token)

  async function login() {
    // const { data, error, status, pending } = await useFetch('http://localhost:3030/authentication', {
    //   method: 'POST',
    //   body: {
    //     strategy: 'local',
    //     email: auth.email,
    //     password: auth.password,
    //   }
    // })
    // console.log(status)

    // const token = useCookie('token')
    // console.log(token)
    // token.accessToken = data.value.accessToken
    // token.user = data.value.user

    // console.log('login', data, error, token)

     try {
      // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
      await signIn(auth, {
        redirect: false
      })
    } catch (error) {
      console.error(error)
    }
  }
</script>
