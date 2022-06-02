<template>
  <div>
    <div> Number of persons in store: {{ $store.getters.numberOfPersons }}</div>
    <div v-if="$store.state.persons.length>0"> In store:
      <ul>
        <li v-for="(person, index) in $store.state.persons" v-bind:key="index"> {{ person.id }} {{ person.name }}</li>
      </ul>
    </div>

    <div v-if="$store.state.persons.length==0">
      <button @click="getPersons">GET PERSONS</button>
    </div>
    <hr>
    <div v-if="$store.state.persons.length>0">
      <select v-model="selectedIndex">
        <option v-for="(person, index) in $store.state.persons" v-bind:key="index" v-bind:value="index">{{ index }}
          {{ person.name }}
        </option>
      </select>
      <hr>
    </div>
    <div v-if="selectedIndex!==''">
      <UpdatablePerson
          v-bind:index="selectedIndex"
          v-bind:person="$store.state.persons[selectedIndex]"
      />
    </div>
    <div>
      {{ $store.state.error }}
    </div>
  </div>
</template>
<script>
import UpdatablePerson from './UpdatablePerson.vue';

export default {
  name: 'PersonList',
  components: {
    UpdatablePerson
  },
  data() {
    return {
      selectedIndex: ''
    }
  },
  methods: {
    getPersons: function () {
      this.$store.dispatch('fetchPersons');
    }
  }
}
</script>

