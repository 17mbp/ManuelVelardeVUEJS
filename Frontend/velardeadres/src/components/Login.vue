<template>
    <div class="login">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input v-model="email" type="text" id="email" required />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';  
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {  console.log('Datos recibidos en el backend:', { username: this.email,
          password: this.password });  
          const response = await axios.post('http://localhost:3000/login', {
            username: this.email,
            password: this.password
          });                    
          localStorage.setItem('token', response.data.token);            
          this.$router.push('/direcciones');
        } catch (error) {
          this.errorMessage = error.response ? error.response.data.message : 'Error al iniciar sesión';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>  