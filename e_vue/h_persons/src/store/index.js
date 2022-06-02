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
            fetch(url)
                .then((response) => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw `error with status ${response.status}`;
                    }
                })
                .then((persons) => {
                    state.commit('_setPersons',{persons:persons});
                })
                .catch((error) => {
                    state.commit('_updateError',{error:error});
                });
        },
        updatePerson: function (state, payload) { 
            state.commit('_updateError',{error:''});
            let person=payload.person;
            let index=payload.index;
            fetch(url + person.id,  
                {
                    method: "PUT",
                    body: JSON.stringify(person),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (response.status == 200 || response.status == 201) {
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            })
            .then((person) => {
                state.commit('_updatePerson',{index:index, person:person});
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
        _setPersons(state, payload) {
            state.persons=payload.persons;
        },
        _updatePerson(state, payload) {
            let index=payload.index;
            let person=payload.person;
            state.persons[index] = person;
        },
        _updateError(state, payload){
            state.error= payload.error;
        }

    }
});




