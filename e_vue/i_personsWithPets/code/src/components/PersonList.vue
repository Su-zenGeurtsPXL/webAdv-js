<template>
  <div>
    <div> Number of persons in store: {{ $store.getters.numberOfPersons }} </div>
    <div> In store: 
        <ul>
            <li v-for="(person, i) in $store.state.persons" v-bind:key="i"> {{person.name}}
                <ul v-if="person.pets.length>0">
                    <li v-for="(pet, j) in person.pets" v-bind:key="j"> {{pet.name}} </li>
                </ul>
            </li>
        </ul> 
    </div>
    <div>
        {{$store.state.error}}
    </div>
    <button @click="getPersons">GET PERSONS</button>
  </div>
</template>
<script>

export default {
    name: 'PersonList',
    methods: {
        getPersons: function () {
            this.$store.dispatch('fetchPersons');
        }
  }
}
</script>

