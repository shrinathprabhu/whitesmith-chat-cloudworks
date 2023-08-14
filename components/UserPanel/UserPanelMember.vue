<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div class="flex">
    <UserPanelPicture :member="member" />
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <span class="font-[500]">{{ member.name }}</span>
        <div
          class="border border-solid border-gray-300 rounded-full px-2 text-xs text-gray-400 uppercase"
        >
          {{ member.department }}
        </div>
      </div>
      <span class="text-gray-400 text-sm capitalize">{{
        member.location
      }}</span>
    </div>
    <div class="ml-auto">
      <button class="border border-solid rounded-lg border-gray-300 p-2">
        <IconsMessageBubble
          :class="{
            'text-green-400': member.online,
            'text-gray-400': !member.online,
          }"
        />
      </button>
    </div>
  </div>
</template>
