import Vue from 'vue'

const state = Vue.observable({
  members: [
    {
      name: 'John Doe',
      role: 'manager',
      location: 'home',
      department: 'd2',
      status: null,
    },
    {
      name: 'John Doe',
      role: 'it',
      location: 'home',
      department: 'd2',
      status: null,
    },
    {
      name: 'John Doe',
      role: 'manager',
      location: 'home',
      department: 'd2',
      status: null,
    },
  ],
})

export default (_, inject) => {
  inject('store', { state })
}
