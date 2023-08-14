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
      class="flex justify-center items-center gap-1 bg-blue-300 hover:bg-blue-400 text-white text-lg p-2 border border-solid border-blue-300 hover:border-blue-400 transition-colors duration-300"
      @click.stop="expanded = !expanded"
    >
      <IconsArrowInCircle
        class="transform transition-transform duration-300"
        :class="{
          'rotate-180': expanded,
        }"
      />
      Members
    </button>
    <div class="overflow-y-auto" style="height: calc(100vh - 96px)">
      <div class="flex flex-col flex-grow p-10 gap-12">
        <UserPanelGroup
          v-for="group in groups"
          :key="group.role"
          :group="group"
          :expanded="expanded"
        />
      </div>
    </div>
  </div>
</template>
