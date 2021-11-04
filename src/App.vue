<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="getAnimales">traer animales</button>
    
    <ul>
      <li v-for="animal in animales" :key="animal.id">{{animal.nombre}}</li>
    </ul>
    <hr>
  <button @click="getAnimal">traer animal por ID</button>
    <h3 v-if="animalSeleccionado">{{animalSeleccionado.nombre}}</h3>
  </div>
</template>

<script>

import service from './services/animales'
export default {
  name: "App",
  data() {
    return {
      animales:[],
      animalSeleccionado:null
    }
  },
  methods: {
    async getAnimales(){
        const response =  await service.get()
        this.animales = response.data
    },
    async getAnimal(){
      const response =  await service.getById(1)
        this.animalSeleccionado = response.data
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
