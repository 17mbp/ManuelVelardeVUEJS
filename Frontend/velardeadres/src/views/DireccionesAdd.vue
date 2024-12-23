<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; 

export default {
    setup() {
        const token = localStorage.getItem("token");
        const router = useRouter(); 
        const direccionnueva = ref({
            nombre: '', apellidopaterno: '', apellidomaterno: '', email: '', domicilio: ''
        });
        const Crear = async () => {
            try { 
                await axios.post("http://localhost:3000/direcciones", direccionnueva.value, {
                    headers: {
                        Authorization: `Bearer ${token}`  
                    }
                });
                setTimeout(() => {
                    alert('creado con éxito');
                }, 300); 
                    direccionnueva.value.nombre = '';
                    direccionnueva.value.apellidopaterno = '';
                    direccionnueva.value.apellidomaterno = '';
                    direccionnueva.value.email = '';
                    direccionnueva.value.domicilio = ''; 
            } catch (error) {
                console.log("no se puede crear cliente nuevo", error);
            }
            router.push({ name: 'direcciones' });
        };
        return {
            direccionnueva,
            Crear
        }
    }
}
</script>

<template>
    <main>
        <h1>Nueva Direcion</h1>
        <form @submit.prevent="Crear" action="">
            <div>
                <label for="nombre">Nombre:</label>
                <input name="nombre" v-model="direccionnueva.nombre" type="text" required>
                <label for="apellidomaterno">Apellido Materno:</label>
                <input name="apellidomaterno" v-model="direccionnueva.apellidomaterno" type="text">
                <label for="apellidopaterno">Apellido Paterno:</label>
                <input name="apellidopaterno" v-model="direccionnueva.apellidopaterno" type="text">
                <label for="domicilio">Dirección:</label>
                <input name="domicilio" v-model="direccionnueva.domicilio" type="text">
                <label for="email">E-mail:</label>
                <input name="email" v-model="direccionnueva.email" type="text">
                <div>
                    <button type="submit">Guardar</button>
                </div>
            </div>
        </form>
    </main>
</template>

<style></style>