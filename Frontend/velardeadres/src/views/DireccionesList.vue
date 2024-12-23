<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const isAuthenticated = ref(false);
    
    onMounted(() => {
      isAuthenticated.value = localStorage.getItem('token') !== null;
      backend();
    });

    const token = localStorage.getItem("token");
    const clientes = ref([]);

    const backend = async () => {
      try {
        const response = await axios.get("http://localhost:3000/direcciones", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        clientes.value = response.data;
        console.log(clientes.value);
      } catch (error) {
        console.log(error);
      }
    };

    const borrar = async (id, nombre) => {
      const confirmar = window.confirm(`Seguro de quitar direccion del cliente: ${nombre}`);
      if (confirmar) {
        try {
          await axios.delete(`http://localhost:3000/direcciones/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          backend();
        } catch (error) {
          console.log("Error ", error);
        }
      }
    };

    return {
      clientes,
      borrar,
      backend,
      isAuthenticated,
    };
  },
};
</script>

<template>
  <main> 
    <nav v-if="isAuthenticated">
      <RouterLink to="/nuevo">Nuevo</RouterLink>
    </nav>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido Materno</th>
          <th>Apellido Paterno</th>
          <th>Correo Electronico</th>
          <th>Domicilio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.id }}</td>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellidopaterno }}</td>
          <td>{{ cliente.apellidomaterno }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.domicilio }}</td>
          <td>
            <button @click="borrar(cliente.id, cliente.nombre)">Borrar</button>
            <RouterLink :to="{ path: 'editar/' + cliente.id }">Editar</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>