<script>
export default {
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    groups() {
      return this.$store.state.members.reduce((obj, member) => {
        if (obj[member.role]) {
          obj[member.role].members.push(member)
        } else {
          obj[member.role] = {
            role: member.role,
            members: [member],
          }
        }
        return obj
      }, {})
    },
  },
}
</script>

<template>
  <div class="flex flex-col">
    <button
      class="flex justify-center bg-blue-300 hover:bg-blue-400 text-white text-lg p-2 border border-solid border-blue-300 hover:border-blue-400 transition-colors duration-300"
      @click.stop="expanded = !expanded"
    >
      Members
    </button>
    <div class="flex flex-col">
      <UserPanelGroup
        v-for="group in groups"
        :key="group.role"
        :group="group"
        :expanded="expanded"
      />
    </div>
  </div>
</template>
