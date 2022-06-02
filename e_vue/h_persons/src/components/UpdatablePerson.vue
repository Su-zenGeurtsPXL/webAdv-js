<template>
<div>
    <div>
            <div v-if="isEditable">
                {{mutablePerson.id}}
                <input type="text" v-model="mutablePerson.name">
                <button @click="update">UPDATE</button>
                <button @click="cancelEdit">CANCEL</button>
            </div>
            <div v-else>
                {{person.id}}
                {{person.name}}
                <button @click="makeEditable">EDIT</button>
            </div>
     </div>
</div>
</template>
<script>

export default {
    name: 'UpdatablePerson',
    props: [ 'index', 'person' ],
    data() {
      return {
            isEditable:false,
            error:'',
            mutablePerson: {id: this.person.id, name: this.person.name}
        }
    },
    methods: {
        makeEditable: function(){
            this.isEditable=true;
        },
        cancelEdit: function(){
            this.isEditable=false;
        },
        update: function(){
            this.$store.dispatch('updatePerson',{index:this.index, person:this.mutablePerson});
            this.isEditable=false;
        }
    }
}
</script>

