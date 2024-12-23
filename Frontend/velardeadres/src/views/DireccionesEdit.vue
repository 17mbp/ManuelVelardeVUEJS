<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import router from "@/router";
export default {
    setup() {
        const token = localStorage.getItem("token");
        const clienteupdate = ref({
            id: null, nombre: '', apellidopaterno: '', apellidomaterno: '', email: '', domicilio: ''
        });
        const Cliente = async () => {
            const ID = useRoute().params.id;
            try {
                const response = await axios.get(`http://localhost:3000/direcciones/${ID}`,  {
                    headers: {
                        Authorization: `Bearer ${token}`  
                    }
                });
                clienteupdate.value = response.data;
            } catch (error) {
                console.log("al cargar para editar", error);
            }
        };
        const Actualizar = async () => {
            try {
                await axios.put(`http://localhost:3000/direcciones/${clienteupdate.value.id}`, clienteupdate.value, {
                    headers: {
                        Authorization: `Bearer ${token}`  
                    }
                });
                setTimeout(() => {
                    alert('direccion se cambiado con éxito');
                }, 300);
                router.push("/direcciones")
            } catch (error) {
                console.log("no se puede actualizar", error);
            }
        };
        onMounted(() => {
            Cliente();
        });
        return {
            clienteupdate,
            Actualizar,
            Cliente
        }
    }
}
</script>
<template>
    <main>
        <h1>Editar</h1>
        <form @submit.prevent="Actualizar" action="">
            <div>
                <label for="nombre">Nombre:</label>
                <input name="nombre" v-model="clienteupdate.nombre" type="text" required>
                <label for="apellidomaterno">Apellido Materno:</label>
                <input name="apellidomaterno" v-model="clienteupdate.apellidomaterno" type="text">
                <label for="apellidopaterno">Apellido Paterno:</label>
                <input name="apellidopaterno" v-model="clienteupdate.apellidopaterno" type="text">
                <label for="domicilio">Dirección:</label>
                <input name="domicilio" v-model="clienteupdate.domicilio" type="text">
                <label for="email">E-mail:</label>
                <input name="email" v-model="clienteupdate.email" type="text">
                <div>
                    <button type="submit">Actualizar</button>
                </div>
            </div>
        </form>
    </main>
</template>

<style></style>, onMounted