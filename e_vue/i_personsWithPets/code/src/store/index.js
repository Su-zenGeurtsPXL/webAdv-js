import { createStore } from 'vuex'

let url = 'http://localhost:3000/persons/';
export default createStore({
    // https://vuex.vuejs.org/guide/state.html
    state: {
        persons: [],
        error:''
    },
    // https://vuex.vuejs.org/guide/getters.html
    getters: {
        numberOfPersons: (state) => state.persons.length
    },
    // actions zijn asynchroon, aangeroepen via dispatch
    // https://vuex.vuejs.org/guide/actions.html
    actions:{
        fetchPersons: function (state) { 
            state.commit('_updateError',{error:''});
            state.commit('_emptyPersons');
            fetch(url+'?_embed=pets')
                .then((response) => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw `error with status ${response.status}`;
                    }
                })
                .then((persons) => {
                    state.commit('_addPersons',{persons:persons});
                })
                .catch((error) => {
                    state.commit('_updateError',{error:error});
                });
        }
    },
    // synchrone wijzigingen van state
    // https://vuex.vuejs.org/guide/mutations.html
    mutations: {
        _emptyPersons(state){
            state.persons=[];
        },
        _addPersons(state, payload) {
            state.persons=payload.persons;
        },
        _updateError(state, payload){
            state.error= payload.error;
        }

    }

});


