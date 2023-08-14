<script>
export default {
  props: {
    member: {
      // TODO: Add typescript for better type checking and maintainability
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="relative flex justify-center">
    <img
      :src="member.profileImage"
      class="rounded-lg h-16 aspect-square object-contain object-center"
    />
    <div
      v-if="member.online"
      class="bg-green-600 w-3 h-3 rounded-full absolute -top-1 -right-1"
    ></div>
    <div
      v-if="member.status"
      class="bg-gray-100 text-gray-400 rounded-full absolute -bottom-4 text-xs whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden py-1 px-3"
    >
      {{ member.status }}
    </div>
  </div>
</template>
