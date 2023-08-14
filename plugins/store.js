import Vue from 'vue'

const state = Vue.observable({
  members: [
    {
      id: 1,
      name: 'John Doe',
      role: 'manager',
      location: 'home',
      department: 'd2',
      status: null,
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user1.fce9ef9.png',
      online: true,
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'it',
      location: 'office',
      department: 'd2',
      status: 'On Break',
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user1.fce9ef9.png',
      online: false,
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'manager',
      location: 'home',
      department: 'd2',
      status: 'Troubleshooting',
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user1.fce9ef9.png',
      online: false,
    },
  ],
})

export default (_, inject) => {
  inject('store', { state })
}
