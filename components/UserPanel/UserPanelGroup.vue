<script>
import { ROLE_TO_DISPLAY_NAME_MAPPING } from '~/utils/constants'

export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      roleToDisplayName: ROLE_TO_DISPLAY_NAME_MAPPING,
    }
  },
}
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex justify-center items-center gap-1">
      <span class="text-gray-400 font-[500]">{{
        roleToDisplayName[group.role]
      }}</span>
      <div
        class="uppercase bg-gray-300 text-white rounded-full px-2 text-sm flex justify-center items-center"
      >
        {{ group.members.length }}
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <UserPanelMember
        v-for="member in group.members"
        :key="member.id"
        :member="member"
        :expanded="expanded"
      />
    </div>
  </section>
</template>
