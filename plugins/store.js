import Vue from 'vue'

const state = Vue.observable({
  // Members of the project
  // Currently static as we don't have a backend
  // TODO: Add a mutation function that backend api/ socket message can call
  // and update the state of members
  // Assume that profileImage is a link to the image that is supplied from the backend
  members: [
    {
      id: 1,
      name: 'Bessie Cooper',
      role: 'team_leader',
      location: 'home',
      department: 'd4',
      status: 'On Break',
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user1.fce9ef9.png',
      online: true,
    },
    {
      id: 2,
      name: 'Darrell Steward',
      role: 'agent',
      location: 'office',
      department: 'd3',
      status: 'In a meeting',
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user2.2d03203.png',
      online: false,
    },
    {
      id: 3,
      name: 'Jerry Nelson',
      role: 'agent',
      location: 'office',
      department: 'd2',
      status: 'Troubleshooting',
      // TODO: Add a generative placeholder image for the profile image
      // Create a method that generates a placeholder image based on the name
      profileImage:
        'https://via.placeholder.com/160x160.png/faebbd/f2994a?Text=JN',
      online: false,
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      role: 'agent',
      location: 'home',
      department: 'd2',
      status: null,
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user3.dcd97b6.png',
      online: true,
    },
    {
      id: 5,
      name: 'Arlene McCoy',
      role: 'manager',
      location: 'office',
      department: 'd1',
      status: 'In a meeting',
      profileImage:
        'https://whitesmith-chat.web.app/_nuxt/img/user4.1956968.png',
      online: false,
    },
    {
      id: 6,
      name: 'Theresa Webb',
      role: 'it',
      location: 'home',
      department: 'd1',
      status: null,
      profileImage:
        'https://via.placeholder.com/160x160.png/faebbd/f2994a?Text=AN',
      online: false,
    },
    {
      id: 7,
      name: 'John Doe',
      role: 'it',
      location: 'home',
      department: 'd1',
      status: null,
      profileImage:
        'https://via.placeholder.com/160x160.png/faebbd/f2994a?Text=AN',
      online: false,
    },
    {
      id: 8,
      name: 'Akmar Nafi',
      role: 'it',
      location: 'home',
      department: 'd1',
      status: null,
      profileImage:
        'https://via.placeholder.com/160x160.png/faebbd/f2994a?Text=AN',
      online: true,
    },
  ],
})

// Injecting the store into the Vue instance
export default (_, inject) => {
  inject('store', { state })
}
