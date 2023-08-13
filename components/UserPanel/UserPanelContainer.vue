<script>
export default {
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
  mounted() {
    console.log(this.groups)
  },
}
</script>

<template>
  <div class="flex flex-col">
    <button class="flex justify-between">Members</button>
    <div class="flex flex-col">
      <!-- <UserPanelGroup v-for="group in groups" :key="group.id" :group="group" /> -->
    </div>
  </div>
</template>
